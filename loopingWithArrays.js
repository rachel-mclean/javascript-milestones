let coolArray = ["blah", "lalala", 1234, true, "candyland"];

//printing every element of coolArray
console.log("Printing every element of coolArray: ");
for(let i = 0; i<coolArray.length; i++){
  console.log(coolArray[i]);
}
console.log("\n");

//printing every other element of coolArray
console.log("Printing every other element of coolArray: ");
for(let j = 0; j<coolArray.length; j+=2){
  console.log(coolArray[j]);
}
console.log("\n");

//printing elements of coolArray in reverse
console.log("Printing the elements of coolArray in reverse: ");
for(let x = coolArray.length-1; x>=0; x--){
  console.log(coolArray[x]);
}
console.log("\n");
