function display(some) {
   console.log(some);
}

function calculate(a, b) {
   let sum = a + b;
   return sum;
}

let result = calculate(10, 25);
display(result);

function calOne(a, b) {
   let sum = a + b;
   disOne(sum);
}

function disOne(some) {
   console.log(some);
}

calOne(10, 30)

/*
   ==> In the 1st function the problem is we have to call two function.
   ==> In the 2nd function the problem is both function is related to other function. But we should keep out function independent.

   ### For solving those problem we need to define call back function.
*/

function sum(a, b, callback) {
   let cal = a + b;
   callback(cal);
}

function displayTwo(some) {
   console.log(some);
}

sum(11, 22, displayTwo);

// another way to use call back function.
function adds(a, b, callback) {
   let sum = a + b;
   callback(sum);
}

adds(15, 16, function (some) {
   console.log(some)
})