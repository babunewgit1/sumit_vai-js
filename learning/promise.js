const marks = 60;
console.log('taks - 1');

const promise = new Promise(function (reslove, reject) {
   setTimeout(function () {
      if (marks >= 60) {
         reslove('task - 2');
      } else {
         reslove('filed')
      }
   }, 2000)
})

console.log('task - 3')

promise
   .then(function (value) {
      console.log(value);
   })

   .catch(function (err) {
      console.log(err);
   })