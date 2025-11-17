import htf2 from '../../rsc/encodings/HTF0002.json';
import htf3 from '../../rsc/encodings/HTF0003.json';
import { Script } from '@/app/SettingsContext';

interface HTFEncoding {
  type: 'word' | 'syllable' | 'punctuation' | 'illegal' | 'capital';
  latin: string;
  abugida: string;
  syllabary: string;
}

interface HTFData {
  version: number;
  encodings: HTFEncoding[];
}

const htfDataV2 = htf2 as HTFData;
const htfDataV3 = htf3 as HTFData;

const getEncodingsByType = (data: HTFData, type: HTFEncoding['type']) => {
  return data.encodings
    .map((encoding, index) => ({ ...encoding, index }))
    .filter(encoding => encoding.type === type);
}

const wordEncodingsV3 = getEncodingsByType(htfDataV3, 'word');
const syllableEncodingsV3 = getEncodingsByType(htfDataV3, 'syllable').sort((a, b) => b.latin.length - a.latin.length);
const punctuationEncodingsV3 = getEncodingsByType(htfDataV3, 'punctuation');

const isLetter = (char: string) => {
  return /[a-zA-Zôêîû]/.test(char);
}

const isCapital = (char: string) => {
  return /[A-Z]/.test(char);
}

const ILLEGAL_CHAR = 0;
const CAPITAL_OPEN = 1;
const CAPITAL_CLOSE = 2;

export function encode(text: string): number[] {
  const encoded: number[] = [htfDataV3.version];
  let remainingText = text;
  let isCapitalized = false;

  while (remainingText.length > 0) {
    const firstChar = remainingText[0];
    
    if (isLetter(firstChar)) {
      let word = '';
      let i = 0;
      while (i < remainingText.length && isLetter(remainingText[i])) {
        word += remainingText[i];
        i++;
      }
      remainingText = remainingText.substring(i);

      const wordMatch = wordEncodingsV3.find(encoding => encoding.latin === word.toLowerCase());
      if (wordMatch) {
        if (isCapital(word[0]) && !isCapitalized) {
          encoded.push(CAPITAL_OPEN); // Capital opener
          isCapitalized = true;
        }
        encoded.push(wordMatch.index);
      } else {
        let remainingWord = word;
        if (isCapital(remainingWord[0]) && !isCapitalized) {
          encoded.push(CAPITAL_OPEN); // Capital opener
          isCapitalized = true;
        }
        remainingWord = remainingWord.toLowerCase();

        while (remainingWord.length > 0) {
          let foundSyllable = false;
          for (let length = 3; length >= 1; length--) {
            const syllable = remainingWord.substring(0, length);
            const syllableMatch = syllableEncodingsV3.find(encoding => encoding.latin === syllable);
            if (syllableMatch) {
              encoded.push(syllableMatch.index);
              remainingWord = remainingWord.substring(length);
              foundSyllable = true;
              break;
            }
          }

          if (!foundSyllable) {
            console.warn(`No encoding found for syllable: ${remainingWord[0]}`);
            encoded.push(ILLEGAL_CHAR); // Illegal character
            remainingWord = remainingWord.substring(1);
          }
        }
      }
    } else {
      if (isCapitalized) {
        encoded.push(CAPITAL_CLOSE); // Capital closer
        isCapitalized = false;
      }
      const punctuationMatch = punctuationEncodingsV3.find(encoding => encoding.latin === firstChar);
      if (punctuationMatch) {
        encoded.push(punctuationMatch.index);
      } else {
        console.warn(`No encoding found for punctuation: ${firstChar}`);
        encoded.push(ILLEGAL_CHAR); // Illegal character
      }
      remainingText = remainingText.substring(1);
    }
  }
  if (isCapitalized) {
    encoded.push(CAPITAL_CLOSE); // Capital closer
  }

  return encoded;
}

export function decode(encoded: number[], script: Script = 'latin'): string {
  if (!encoded || encoded.length < 1) {
    return '';
  }

  const version = encoded[0];
  const htfData = version === 2 ? htfDataV2 : htfDataV3;

  if (version !== htfData.version) {
    console.warn(`Mismatched HTF version. Expected ${htfData.version}, got ${version}.`);
  }

  const data = encoded.slice(1);
  let result = '';
  let capitalizeNext = false;

  for (const index of data) {
    if (version === 3) { // Version 2 and lower does not have capital letter support
      if (index === CAPITAL_OPEN) { // Capital opener
        if (script === 'latin') {
          capitalizeNext = true;
        } else {
          result += htfData.encodings[CAPITAL_OPEN][script];
        }
        continue;
      }
      if (index === CAPITAL_CLOSE) { // Capital closer
        if (script === 'latin') {
          capitalizeNext = false;
        } else {
          result += htfData.encodings[CAPITAL_CLOSE][script];
        }
        continue;
      }
    }

    if (htfData.encodings.at(index) !== undefined) {
      const encoding = htfData.encodings[index];
      let value = encoding[script];
      if (script === 'latin' && capitalizeNext) {
        if (encoding.type === 'word' || encoding.type === 'syllable') {
          value = value.charAt(0).toUpperCase() + value.slice(1);
          capitalizeNext = false;
        }
      }
      result += value;
    } else {
      result += htfData.encodings[ILLEGAL_CHAR][script]; // Return illegal character for invalid indices
    }
  }

  return result;
}

/**
 * Creates a snake_cased, human-readable ID from an HTF-INT array based on syllabary.
 * @param encoded The array of numbers to encode.
 * @returns The snake_cased syllabary string.
 */
export function encodeToSnakeCaseSyllabary(encoded: number[]): string {
  if (!encoded || encoded.length < 1) {
    return '';
  }

  const version = encoded[0];
  const htfData = version === 2 ? htfDataV2 : htfDataV3;
  const data = encoded.slice(1);
  let result = '';
  let prevType: HTFEncoding['type'] | null = null;

  for (const index of data) {
    if (index >= 0 && index < htfData.encodings.length) {
      const encoding = htfData.encodings[index];
      const currentType = encoding.type;

      if (currentType === 'punctuation' || currentType === 'capital') {
        continue; // Rule 4: Skip punctuation
      }

      // Rule 1: If the preceding was a syllable and the new is a word, place an underscore
      if (prevType === 'syllable' && currentType === 'word') {
        result += '_';
      }

      if (currentType === 'word') {
        result += encoding.syllabary + '_'; // Rule 2: Place word followed by underscore
      } else if (currentType === 'syllable') {
        result += encoding.syllabary; // Rule 3: Place syllable alone
      }
      
      prevType = currentType;
    }
  }

  // Rule 5: If the last character is an underscore, remove it
  if (result.endsWith('_')) {
    result = result.slice(0, -1);
  }

  return result;
}