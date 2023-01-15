const obj = {
   print: function (age) {
      return this.name + age;
   }
}

const person = {
   name: 'babu'
}

console.log(obj.print.apply(person, [20]));

console.log(Math.max.apply(null, [1, 2, 3, 4, 5, 6]));