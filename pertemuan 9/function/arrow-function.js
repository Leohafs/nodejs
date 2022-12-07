/**
 * membuat fungsi menghitung luas lingkaran
 * Fungsi dibuat dengan gaya function arrow
 * 
 * @param {number} jari (jari-jari)
 * @returns {number} hasil (luas lingkaran)
 */

//cara 1 ~~~~~
// const hitungLuasLingkaran = (jari) => {
//     const PHI = 3.14;
//     const hasil = PHI * jari * jari;
//     return hasil;
// };
// console.log(hitungLuasLingkaran(5));
// console.log(hitungLuasLingkaran(10));

//cara 2 ~~~~~
const hitungLuasLingkaran = (jari) => 3.14 * jari * jari;

// memanggil fungsi dengan memanggil parameter
console.log(hitungLuasLingkaran(5));
console.log(hitungLuasLingkaran(10));
