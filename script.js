let p = 1000;   // Principal amount
let r = 0.10;  // Rate of interest (10%)
let n = 1;     // Compounded once per year
let t = 5;     // Time in years

let a = p * (1 + (r/n)) ** (n*t);  // Amount formula
let ci = a - p;                     // Compound Interest = Amount - Principal

console.log(`The compound interest after ${t} years is: ${ci}`);