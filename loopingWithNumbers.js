//printing every integer between 40 and 60, inclusive
console.log("Printing every integer between 40 and 60, inclusive: ");
for(let i = 40; i<=61; i++){
  console.log(i);
}
console.log("\n")

//printing every even integer between 40 and 60, inclusive
console.log("Printing every even integer between 40 and 60, inclusive: ");
for(let j = 40; j<=60; j+=2){
  console.log(j);
}
console.log("\n")

//printing every integer between min and max, inclusive
let min = 3;
let max = 14;
console.log("min: " + min + "; max: " + max + ". Printing every integer between min and max, inclusive: ");
for(let k = min; k<=max; k++){
  console.log(k);
}
console.log("\n");

//printing every even integer between min and max, inclusive
console.log("min: " + min + "; max: " + max + ". Printing every even integer between min and max, inclusive: ");
for(let m = min; m<=max; m++){
  if(m%2 === 0){
    console.log(m);
  }
}
console.log("\n");

//printing the first 10 multiples of 7
console.log("Printing the first 10 multiples of 7: ");
for(let n = 1; n<=10; n++){
  console.log(7*n);
}
console.log("\n");

//printing the first 'k' multiples of 7
let k = 5;
console.log("Printing the first 'k' (" + k + ") multiples of 7: ");
for(let p = 1; p<=k; p++){
  console.log(7*p);
}
console.log("\n");

//printing the first 'k' multiples of 'num'
let num = 10;
console.log("Printing the first 'k' (" + k + ") multiples of 'num' (" + num + "): ")
for(let x = 1; x<=k; x++){
  console.log(num*x);
}
console.log("\n");
