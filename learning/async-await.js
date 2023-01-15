const payment = true;
const marks = 90;

function enroll() {
   console.log('course enrollment has start');

   const promise = new Promise(function (reslove, reject) {
      setTimeout(function () {
         if (payment) {
            reslove()
         } else {
            reject('payment failed')
         }
      }, 2000)
   })

   return promise;
}

function progress() {
   console.log('Now you are in course');

   const promise = new Promise(function (reslove, reject) {
      setInterval(function () {
         if (marks >= 50) {
            reslove();
         } else {
            reject('You do not have enough marks')
         }
      }, 3000)
   })

   return promise;
}

function getCertificate() {
   console.log('Certificate is making');

   const promise = new Promise(function (reslove) {
      setTimeout(function () {
         reslove('Here is your certificate')
      }, 1000)
   })

   return promise;
}

async function crouse() {
   try {
      await enroll();
      await progress();
      const result = await getCertificate();
      console.log(result)
   }

   catch (err) {
      console.log(err)
   }
}

crouse()