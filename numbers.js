
let num1 = 4;
let num2 = 2;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let power = num1 ** num2;
let roundedDownQuotient = Math.floor(num1 / num2);

console.log("The sum of num1 and num2 is: " + sum);
console.log("The difference between num1 and num2 is: " + difference);
console.log("The product of num1 and num2 is: " + product);
console.log("The quotient of num1 divided by num2 is: " + quotient);
console.log("num1 to the power of num2 is: " + power);
console.log("The quotient of num1 divided by num2, rounded down, is " + roundedDownQuotient + "\n");

let blah = 123;
let rightmostDigit = blah%10;

function oddOrEven(num) {
  if(num%2 === 0){
    return "even";
  } else{
    return "odd";
  }
}

console.log("The rightmost digit of blah is: " + rightmostDigit);
console.log("blah is " + oddOrEven(blah));

//increment by 1
blah++;
console.log("The current value of blah incremented by 1 is: " + blah);

//increment by 2
blah+=2
console.log("The current value of blah incremented by 2 is: " + blah);


//increment by 10
blah+=10;
console.log("The current value of blah incremented by 10 is: " + blah);

//increment by k
let k = 20;
blah+=k;
console.log("The current value of blah incremented by k is: " + blah);
