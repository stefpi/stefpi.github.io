const fs = require('node:fs');

let array = [];

const a = 0.01;
const b = 0.0006;
const c = "";

let h = 0.6289513340634733

function xyfinder(k,c=0) {
  m = a * Math.cos(k) * Math.E**(b*k);
  n = a * Math.sin(k) * Math.E**(b*k);

  x = m * Math.cos(c) - n * Math.sin(c);

  y = m * Math.sin(c) + n * Math.cos(c);

  return [x,y]
}

for (let l = 0; l < 16000; l += h) {
  let [x,y] = xyfinder(l);
  
  norm = Math.sqrt(x**2 + y**2);

  brightnessIndex = norm/4

  array.push([x*250,y*250, brightnessIndex])
}

fs.writeFile(
  './function.json',
  JSON.stringify(array),
  function (err) {
    if (err) {
      console.log(err);
    }
  }
)
