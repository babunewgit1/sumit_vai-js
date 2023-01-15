function print() {
   console.log('this is line 2 code');
}

console.log('this is line 1 code');
print();
console.log('this is line 3 code');

// uporar function gula sob syncronus function. ai gula por por print hobe.

console.log('this is one');

setTimeout(function () {
   console.log('this is two')
}, 2000);

console.log('this is three');

// upor er ai set-time out function ta javascript er akta build in asyn function. er mane hocche ai function ta 2000 milisecond pore call hobe. tar mane 1st run hobe this is one, 2nd e ashe jokhn dekbe akhn e akta asyn function ase tokhn 'this is three' run hobe r pore asyn er time moto ata 2000 mili second pore run korbe this is two.

setInterval(() => {
   console.log('Hi....')
}, 2000);