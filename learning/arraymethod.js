const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.reduce((a, b) => {
   return Math.max(a, b);
})

console.log(result);