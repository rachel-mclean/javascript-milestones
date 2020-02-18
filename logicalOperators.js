let num1 = 10;
let num2 = 13;

console.log("Here are your numbers: num1 is " + num1 + " and num2 is " + num2);
if(num1%2===0 && num2%2===0){
  console.log("Both numbers are even, amazing!");
}

else if(num1%2!==1 || num2%2!==1){
  console.log("Only one number is even!");
}

else{
  console.log("Neither number is even.");
}
