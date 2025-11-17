import { encode, decode } from '../lib/htf-int';

describe('htf-int', () => {
  it('should encode and decode the test string correctly', () => {
    const testString = "kon konwo Konwo Kon li mônbili Mônbili Bônmili yê sûît Sûît Solobîn";
    const encoded = encode(testString);
    const decoded = decode(encoded, 'latin');
    expect(decoded).toBe(testString);
  });
});
