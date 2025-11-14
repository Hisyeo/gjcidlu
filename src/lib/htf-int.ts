import htf2 from '../../rsc/HTF0002.json';

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
 * @returns The decoded string.
 */
export function decode(encoded: number[]): string {
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
        return htfData.encodings[index].latin;
      }
      return htfData.encodings[0].latin; // Return illegal character for invalid indices
    })
    .join('');
}

/**
 * Decodes an array of numbers back into a string using the syllabary mapping.
 * @param encoded The array of numbers to decode.
 * @returns The decoded syllabary string.
 */
export function decodeToSyllabary(encoded: number[]): string {
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
        return htfData.encodings[index].syllabary;
      }
      return htfData.encodings[0].syllabary; // Return illegal character for invalid indices
    })
    .join('');
}
