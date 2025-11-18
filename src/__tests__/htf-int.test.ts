import { encode, decode, encodeToSnakeCaseSyllabary } from '../lib/htf-int';

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

  it('should encode snake case syllabary format correctly', () => {
    const testString = "îskô fos sûn hûwu sûn bôlfêlê sûît sûn îskô hôktun sûn îskô nexê kôs, fos hoî sîkîn Kulismus îskô"
    const encoded = encode(testString);
    const snaked = encodeToSnakeCaseSyllabary(encoded)
    expect(snaked).toBe('iSko_fS_suN_huwr_suN_boLfele_suwiT_suN_iSko_hoKtrN_suN_iSko_nqxe_koS_fS_hAi_sikiN_KrljSmrS_iSko')
  })

  it('should encode multiple word proper names into snake case syllabary format correctly', () => {
    const testString = "îskô Fû Bol Bos li xôn"
    const encoded = encode(testString);
    const snaked = encodeToSnakeCaseSyllabary(encoded)
    expect(snaked).toBe('iSko_Fu_BL_BS_lj_xoN')
  })

  it('should encode "côûfon fecko" to "coufN_fqCk"', () => {
    const testString = "côûfon fecko";
    const encoded = encode(testString);
    const snaked = encodeToSnakeCaseSyllabary(encoded);
    expect(snaked).toBe("coufN_fqCk");
  });
});
