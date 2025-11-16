import htf2 from '../../rsc/HTF0002.json';
import { Script } from '@/app/SettingsContext';

interface HTFEncoding {
  type: 'word' | 'syllable' | 'punctuation' | 'illegal';
  latin: string;
  abugida: string;
  syllabary: string;
}

interface HTFData {
  version: number;
  encodings: HTFEncoding[];
}

const htfData = htf2 as HTFData;

// To improve performance, create a sorted list of encodings (longest first)
const sortedEncodings = htfData.encodings
  .map((encoding, index) => ({ ...encoding, index })) // Keep original index
  .slice(1) // Skip the illegal character at index 0
  .sort((a, b) => b.latin.length - a.latin.length);

/**
 * Encodes a string using the HTF-INT v2 algorithm.
 * @param text The string to encode.
 * @returns An array of numbers representing the encoded string.
 */
export function encode(text: string): number[] {
  const encoded: number[] = [htfData.version];
  let remainingText = text;

  while (remainingText.length > 0) {
    let bestMatch: { index: number; length: number } | null = null;

    // Find the longest possible match from the current position
    for (const encoding of sortedEncodings) {
      if (remainingText.startsWith(encoding.latin)) {
        bestMatch = { index: encoding.index, length: encoding.latin.length };
        break; // Since the list is sorted by length, the first match is the best
      }
    }

    if (bestMatch) {
      encoded.push(bestMatch.index);
      remainingText = remainingText.substring(bestMatch.length);
    } else {
      // If no match is found, the string is invalid according to the encoding.
      encoded.push(0); // Push illegal character index
      break; // Stop processing
    }
  }

  return encoded;
}

/**
 * Decodes an array of numbers back into a string using the HTF-INT v2 data.
 * @param encoded The array of numbers to decode.
 * @param script The script to decode to.
 * @returns The decoded string.
 */
export function decode(encoded: number[], script: Script = 'latin'): string {
  if (!encoded || encoded.length < 1) {
    return '';
  }

  const version = encoded[0];
  if (version !== htfData.version) {
    console.warn(`Mismatched HTF version. Expected ${htfData.version}, got ${version}.`);
  }

  const data = encoded.slice(1);
  return data
    .map(index => {
      if (index >= 0 && index < htfData.encodings.length) {
        return htfData.encodings[index][script];
      }
      return htfData.encodings[0][script]; // Return illegal character for invalid indices
    })
    .join('');
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

  const data = encoded.slice(1);
  let result = '';
  let prevType: HTFEncoding['type'] | null = null;

  for (const index of data) {
    if (index >= 0 && index < htfData.encodings.length) {
      const encoding = htfData.encodings[index];
      const currentType = encoding.type;

      if (currentType === 'punctuation') {
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
