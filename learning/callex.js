const payment = true;
const marks = 80;

function enroll(callback) {
   console.log('Course has stared');

   setTimeout(function () {
      if (payment) {
         callback()
      } else {
         console.log('Payment Failed! You can not enroll the course')
      }
   }, 2000)
}

function progress(callback) {
   console.log('Payment Successfull! You have redirect in the course. Now you are in the course system');
   setTimeout(function () {
      if (marks >= 70) {
         callback();
      } else {
         console.log('You do not have enough marks')
      }
   }, 3000)
}

function getCertificate() {
   console.log('Certificate is making');

   setTimeout(function () {
      console.log('Congress ! Here is your certificate')
   }, 1000)
}

enroll(function () {
   progress(getCertificate)
})