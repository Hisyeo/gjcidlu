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
