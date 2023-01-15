// 1. 1 theke 6 porjonto amra ki vabe randomly print korte pari.
const rand = Math.ceil(Math.random() * 6);
console.log(rand)

//2. How much vowel has in a sentence
const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function findVowel(sentence) {
   let count = 0;
   let stringtoAray = sentence.split('');
   stringtoAray.forEach((value) => {
      if (vowel.includes(value)) {
         count++;
      }
   })

   return count;
}

console.log(findVowel('I love Bangladesh very much'));

// how much vowel has in a sentence
const vow = ['a', 'e', 'i', 'o', 'u'];

function findvow(sentence) {
   let count = 0;
   let sen = sentence.toLowerCase().split('');
   sen.forEach(function (value) {
      if (vow.includes(value)) {
         count++;
      }
   });
   return count;
}

console.log(findvow('I love Bangladesh very much'));


// Print the duplicate number from the array.
const numArray = [1, 2, 5, 8, 1, 4, 6, 8, 7, 8, 2];
const finddup = numArray.filter(function (value, index, arr) {
   return arr.indexOf(value) !== index;
})

console.log(finddup);


// Print the unique number from the array.
const numArrayTwo = [1, 2, 5, 8, 1, 4, 6, 8, 7, 8, 2];
const unique = numArrayTwo.filter(function (value, index, arr) {
   return arr.indexOf(value) === index;
})

console.log(unique);

