const nilai = 90;
let grade = "";

if(nilai > 90){
    grade = "A";
}else if(nilai > 80){
    grade = "B";
}else{
    grade = "C";
}

console.log(`grade anda adalah ${grade}`);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Short conditional menggunakan ternary operator (? dan :).
 * ? digunakan untuk kondisi true.
 * : digunakan untuk kondisi else.
 */
age = 19;

// if(age > 17){
//     console.log("Sudah Dewasa");
// }else{
//     console.log("Belum Dewasa");
// }

age >17 ? console.log("Sudah Dewasa") : console.log("Belum Dewasa");