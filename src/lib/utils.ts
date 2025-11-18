export function decodeUnicode(str: string): string {
  if (!str) {
    return '';
  }
  // A regular expression to find \uXXXX sequences that are not already escaped.
  // This is a bit tricky because a string might contain "\\uXXXX" which should be treated as a literal "\uXXXX".
  // A simple and effective way is to use JSON.parse, which is designed to handle these escape sequences.
  try {
    // We wrap the string in quotes to make it a valid JSON string literal.
    // JSON.parse will then correctly interpret the \uXXXX sequences.
    return JSON.parse(`"${str}"`);
  } catch {
    // If JSON.parse fails (e.g., the string contains unescaped quotes),
    // fall back to a simpler regex-based replacement, though it's less robust.
    return str.replace(/\\u([\dA-F]{4})/gi, (match, grp) =>
      String.fromCharCode(parseInt(grp, 16))
    );
  }
}

/**
 * Standard levenshtein distance algorithm
 * @param s1 First string
 * @param s2 Second string
 * @returns distance
 */
export function levenshtein(s1: string, s2: string): number {
  if (s1.length < s2.length) {
    return levenshtein(s2, s1);
  }

  if (s2.length === 0) {
    return s1.length;
  }

  let previousRow = Array.from({ length: s2.length + 1 }, (_, i) => i);

  for (let i = 0; i < s1.length; i++) {
    let currentRow = [i + 1];
    for (let j = 0; j < s2.length; j++) {
      const insertions = previousRow[j + 1] + 1;
      const deletions = currentRow[j] + 1;
      const substitutions = previousRow[j] + (s1[i] !== s2[j] ? 1 : 0);
      currentRow.push(Math.min(insertions, deletions, substitutions));
    }
    previousRow = currentRow;
  }

  return previousRow[previousRow.length - 1];
}
