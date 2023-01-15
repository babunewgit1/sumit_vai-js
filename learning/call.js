const obj = {
   name: 'babu',
   print: function (age) {
      return this.name + age;
   }
}

console.log(obj.print.call({ name: 'shiopa' }, 20));