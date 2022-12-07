/**
 * membuat fungsi menghitung luas lingkaran
 * Fungsi dibuat dengan gaya function declaration
 * 
 * @param {number} jari (jari-jari)
 * @returns {number} hasil (luas lingkaran)
 */
function hitungLuasLingkaran(jari){
    const PHI = 3.14;
    const hasil = PHI * jari * jari;
    return hasil;
};
// memanggil fungsi dengan memanggil parameter
console.log(hitungLuasLingkaran(5));
console.log(hitungLuasLingkaran(10));