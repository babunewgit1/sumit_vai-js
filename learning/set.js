const mySet = new Set([1, 2, 3, 4, 5, 6]);
console.log(mySet);

mySet.add('Babu');
console.log(mySet);

mySet.delete(1);
console.log(mySet);

console.log(mySet.size);

console.log(mySet.has('Babu'));

mySet.forEach(function (value) {
   console.log(value);
})

for (let x of mySet) {
   console.log(x);
}