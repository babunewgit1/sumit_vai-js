let str = 'I love Bangladesh love';

console.log(str.length);
console.log(str.slice(1, 5));
console.log(str.substring(2, 5));
console.log(str.replace('love', 'hate'));
console.log(str.replaceAll('love', 'hate'));
console.log(str.concat(' babu'));
console.log(str.toUpperCase());
console.log(str.toLowerCase());


let x = "    babu    ";
console.log(x.trim());
console.log(x.trimStart());
console.log(x.trimEnd());

let pad = "5";
console.log(pad.padStart(5, '0'));

console.log(pad.padEnd(6, 'x'));

console.log(str[0])
console.log(str.split(' '));

const stri = "Mahmudul Hasan babu h";
console.log(stri.indexOf('h'));
console.log(stri.lastIndexOf('h'));
console.log(stri.search('dul'))
console.log(stri.match('dulx'))
console.log(stri.matchAll('h'));
console.log(stri.includes('h'));
console.log(stri.startsWith('M'))

const xxx = ['babu', 'shioa'];
xxx[2] = 'rifat';
console.log(xxx);