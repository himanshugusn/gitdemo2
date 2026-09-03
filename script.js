console.log("-- fisrt question--");

let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log(sum);

console.log("--second question--");
let a = 10;
for (let b = 1; b <= 10; b++) {
  let table = a * b;
  console.log(`${a} x ${b} = ${table}`);
}

console.log("--third question--");
let num = 7;
let checkprime = 2;
let isprime = true;

while (checkprime < num) {
  if (num % checkprime == 0) {
    isprime = false;
    break;
  }

  checkprime++;
}
isprime ? console.log("prime number") : console.log("not a prime number");

console.log("-- question four--");
let dividend = 153;
let divisor = 1;
while (divisor <= dividend) {
  if (dividend % divisor == 0) {
    console.log(divisor);
  }
  divisor++;
}

console.log("--question five--");

let newnum = 139;
let toatlsum = 0;
while (newnum > 0) {
  let digit = newnum % 10;
  toatlsum += digit;
  newnum = Math.floor(newnum / 10);
}
console.log(toatlsum);

console.log("--sixth question--");

let orgvalue = 153;
let orginal=orgvalue
let isArmstrong = 0;
while (orgvalue > 0) {
  let total = orgvalue % 10;
  isArmstrong += total * total * total;

  orgvalue = Math.floor(orgvalue / 10);
}
if (orginal == isArmstrong) {
  console.log("Armstrong number hai");
} else {
  console.log("Armstrong number nahi hai");
}
