function Person(name, age, country) {
   this.name = name;
   this.age = age;
   this.country = country;
   this.pin = function () {
      return this.name;
   }
}

const one = new Person('babu', 20, 'bd');
console.log(one);

console.log(one.pin())

one.value = 40;
console.log(one);


function Persons(first, last, age, eyecolor) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
   this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";

const newObj = new Person('one', 'two', 23, 'black');
console.log(newObj)