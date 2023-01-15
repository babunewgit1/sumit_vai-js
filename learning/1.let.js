// let diea declare variable block scope er nieom mene chole. but var diea declare kora block scope mane nah

if (true) {
   let x = 0;
   console.log(x); // let block scope e thakar koron e ata barire theke access kora jabe nah. ata shudu je block e declare kora hoise sei block ei access kora jabe.
}

// console.log(x);

if (true) {
   var a = "babu";
   console.log(a);
}

console.log(a);

// Upor er ai example ta te var diea block scope er moddhe akta variable declare kora hoise. jar karon e ata block er baire o access kora jacche


let x = 'babu';
let y = 'mia';
console.log(x - y)
