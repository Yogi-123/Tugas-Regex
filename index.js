// soal 1
let regex1 = /[A-Z]/;
function validation(a) {
  if (regex1 == true) {
    console.log("huruf pertama adalah huruf besar");
  } else {
    console.log("huruf pertama adalah huruf kecil");
  }
}

// soal 2
let regex2 = /\d{10,12}/;
let nomor = 12345678910;
let nomor2 = 1234567891011;

console.log(regex2.test(nomor2));

// soal 3
let regex3 = /^"Bagaimana cara memulai usaha bisnis"$ |^"Bootcam impactbyte"$ |^"Status covid hari ini"$/;
