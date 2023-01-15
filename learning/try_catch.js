const input = 15;

try {
   if (input === "") {
      throw 'Input is empty'
   } else if (isNaN(input)) {
      throw 'Input will be a number'
   } else if (input > 5) {
      throw 'Input is bigger than 5'
   } else if (typeof input === 'string') {
      throw 'Input will be number not a string'
   } else {
      throw 'no error'
   }
} catch (err) {
   console.log(err)
}

console.log('this is from error')