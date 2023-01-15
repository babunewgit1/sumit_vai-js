function a(x, y) {
   let p = arguments;
   let n = 0;
   for (let i = 0; i < p.length; i++) {
      n += p[i]
   }

   return n;


}

console.log(a(5, 6));


// iffe
(function (c, d) {
   console.log(c + d)
})(1, 2)