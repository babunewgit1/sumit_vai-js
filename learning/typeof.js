const a = 'String';
const b = 123;
const c = true;
const d = [1, 2, 3];
const e = {
   name: 'babu',
}

const f = function () {
   return 'heppay coding'
}

const mySet = new Set([1, 2, 3]);
const myMap = new Map([
   ['babu', 'shipa'],
   ['riead', 'rifat']
])

console.log(myMap);

// check with type of operator
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof mySet)
console.log(typeof myMap)

// check with constractor;

console.log(a.constructor.toString())
console.log(b.constructor.toString())
console.log(c.constructor.toString())
console.log(d.constructor.toString())
console.log(e.constructor.toString())
console.log(f.constructor.toString())
console.log(mySet.constructor.toString())
console.log(myMap.constructor.toString())
