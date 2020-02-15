let coolArray = [" boop", " zip", " blahhh", " flippity flop", " fe fi fo"];
let length = coolArray.length;
let first = coolArray[0];
let second = coolArray[1];
let last = coolArray[length-1];
let k = 3;
let kElement = coolArray[k];

console.log("The length of coolArray is: " + length);
console.log("The first element of coolArray is: " + first);
console.log("The second element of coolArray is: " + second);
console.log(`The k-th element ${k} of coolArray is: ${kElement}`);
console.log("The last element of coolArray is: " + last + "\n");

//changing element values
coolArray[0] = " beep";
coolArray[1] = " zap";
coolArray[length-1] = " fum";
coolArray[k] = " flappity flap";

console.log("The first element of coolArray has changed to: " + coolArray[0]);
console.log("The second element of coolArray has changed to: " + coolArray[1]);
console.log(`The k-th element ${k} of coolArray has changed to: ${coolArray[k]}`);
console.log("The last element of coolArray has changed to: " + coolArray[length-1] + "\n");

//appending element
coolArray.push(" zzzzzzz");
console.log("Appending 'zzzzzzz' to coolArray: " + coolArray);

//removing value from array
coolArray.pop();
console.log("Removing last element from coolArray: " + coolArray);

//prepending value to front of array
let newArray = ["zzzzzzz"];
for(let i = 0; i<length; i++){
  newArray.push(coolArray[i]);
}
coolArray = newArray;
console.log("Prepending 'zzzzzzz' to front of coolArray: " + coolArray);

//removing first element of array
let array2 = [];
for(let j = 1; j<coolArray.length; j++){
  array2.push(coolArray[j]);
}
coolArray = array2;
console.log("Removing first element of coolArray: " + coolArray);
