const myMap = new Map([
   ['one', 200],
   ['two', 300],
   ['three', 400],
   ['four', 500],
]);

console.log(myMap);

myMap.set('ami', 'babu');
console.log(myMap);


console.log(myMap.get('ami'));

console.log(myMap.size);

myMap.delete('four');
console.log(myMap);

myMap.forEach(function (value, key) {
   console.log(value);
   console.log(key);
})

for (let x of myMap) {
   console.log(x)
}

for (let x of myMap) {
   console.log(x[0])
}