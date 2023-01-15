const person = {
   name: 'babo',
   get pname() {
      return this.name;
   }
}

console.log(person.pname);


const person1 = {
   firstName: "John",
   lastName: "Doe",
   language: "",
   set lang(lang) {
      this.language = lang;
   }
};

person1.lang = 'bn'

console.log(person1)