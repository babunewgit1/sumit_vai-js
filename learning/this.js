// in Object this will reffer the object.
const obj = {
   name: 'babu',
   print: function () {
      console.log(this);
   }
}

obj.print();

// in global this will reffer window object;
console.log(this);

// in function this will reffer window object.
console.log(this);

// in event this will reffer this html element.


const person = {
   print: function () {
      return this.name + this.age
   }
}

const personTwo = {
   name: 'Babu',
   age: 25
}

console.log(person.print.call(personTwo));