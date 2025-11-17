import { encode, decode } from '../lib/htf-int';

describe('htf-int', () => {
  it('should encode and decode the test string correctly', () => {
    const testString = "kon konwo Konwo Kon li mônbili Mônbili Bônmili yê sûît Sûît Solobîn";
    const encoded = encode(testString);
    const decoded = decode(encoded, 'latin');
    expect(decoded).toBe(testString);
  });

  it('should decode a version 2 string correctly', () => {
    const v2Encoded = [2, 247, 1774, 833];
    const decoded = decode(v2Encoded, 'latin');
    expect(decoded).toBe('ôsôlê êto');
  });
});
