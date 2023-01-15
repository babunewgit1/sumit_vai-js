const payment = true;
const marks = 90;

function enroll() {
   console.log('Crouse enrollment has started');

   const promise = new Promise(function (reslove, reject) {
      setTimeout(function () {
         if (payment) {
            reslove()
         } else {
            reject('Payment Failed')
         }
      }, 2000)
   })

   return promise;
}

function progress() {
   console.log('Course is progress');

   const promise = new Promise(function (reslove, reject) {
      setTimeout(function () {
         if (marks >= 80) {
            reslove()
         } else {
            reject('You did not get enough marks')
         }
      }, 3000)
   })

   return promise;
}

function getCertificate() {
   console.log('certificate is being making');

   const promise = new Promise(function (reslove) {
      setTimeout(function () {
         reslove('Here is your certificate')
      }, 1000)
   })

   return promise;
}

enroll()
   .then(progress)
   .then(getCertificate)
   .then(function (value) {
      console.log(value);
   })
   .catch(function (err) {
      console.log(err)
   })