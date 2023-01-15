class Car {
   constructor(name, model) {
      this.name = name;
      this.model = model;
   }

   print() {
      return this.name + ' ' + this.model
   }
}

class Ncar extends Car {
   constructor(name, model, use) {
      super(name, model);
      this.use = use;
   }

   final() {
      return this.print() + this.use;
   }
}

const a = new Ncar('tvs', '4v', '5 year');
console.log(a);

Ncar.prototype.age = 25;
console.log(a);

a.malik = "babu";
console.log(a);