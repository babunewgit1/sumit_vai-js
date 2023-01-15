// akta sentence e akta word koto bar ase ta ber koto. 
// oi word ti oi sentence 1st koto to index e ase.

// function findMatch(sentence) {
//    let mathches = sentence.match(/p/gi);
//    let meatchResult = mathches ? mathches.length : "no match found";
//    console.log(meatchResult);
// }

// findMatch('I am babu, i love my code editor very much, i am 26 years old');


// function indexMatch(sen) {
//    let senMatch = sen.search(/m/gi);
//    let result = senMatch >= 0 ? senMatch : 'not found'
//    console.log(result)
// }

// indexMatch('I am babu, i love my code editor very much, i am 26 years old')


// input: linearsearch(['a', 'b', 'C', 'd', 'C'], 'C')
// output: 2 or 'not found!'
// problem: linearSearch() function 

function linearSearch(arr, val) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
         return i;
      }
   }
   return 'no found';
}
console.log(linearSearch(['a', 'b', 'C', 'd', 'C'], 'C'));


// Kono akta array theke sob chiea boro string ta khuje ber koro r oi array te oi string tar index number koto ta retunr koro.

function long(arr) {
   let longest = '';
   for (let name of arr) {
      if (name.length > longest.length) {
         longest = name;
      }
   }

   return [longest, arr.indexOf(longest)];
}

console.log(long(['Babu', 'rifat', 'Mahmudul hasan Babu']))

// 1 -100 er moddhe kon number ti 3 dara bibijjo 5 dara bibijjo and 3, 5 ai 2 ta dieai bibijjo.
for (let i = 0; i <= 100; i++) {
   if (i % 3 == 0) {
      console.log('3 : ' + i)
   } else if (i % 5 == 0) {
      console.log('5 : ' + i)
   } else if (i % 5 == 0 && i % 3 == 0) {
      console.log(i);
   } else {
      console.log(i)
   }
}

// how to remove falci value form an array.

const arry = [
   "lws",
   undefined,
   "learn With Sumit",
   false,
   "apple",
   40,
   "k",
   true,
   "Thanks all",
   NaN
]

const resultarrau = arry.filter(value => {
   return value;
})

console.log(resultarrau);


// remove falsy value form object
const obj = {
   a: "lws",
   b: undefined,
   C: "learn With Sumit",
   d: false,
   e: "",
   f: "apple",
   g: 40,
   i: true,
   j: "Thanks all",
   k: NaN,
};

function filterObje(obj) {
   for (let i in obj) {
      if (!obj[i]) {
         delete obj[i]
      }


   }

   return obj
}

console.log(filterObje(obj))


/*
   arr[1,2,1];
   replace korte hobe 1 ke 3 diea.
*/

function arplace(arr, next, replace) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === next) {
         arr[i] = replace;
      }
   }

   return arr;
}

console.log(arplace([1, 2, 1], 1, 3))


function allnumber(...param) {
   const a = [...param];
   let sum = 0;
   for (let i = 0; i < a.length; i++) {
      sum += a[i]
   }

   return sum;
}

console.log(allnumber(1, 2, 3, 4, 5, 6, 10))

