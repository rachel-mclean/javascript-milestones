let listOfNumbers = [1, 2, 12, 4, 5, 0, 7, 8];

//finding largest element
let max = listOfNumbers[0];
for(let i = 0; i<listOfNumbers.length; i++){
  if(listOfNumbers[i]>=max){
    max = listOfNumbers[i];
  }
}
console.log("The max of [" + listOfNumbers + "] is " + max);

//finding smallest element
let min = listOfNumbers[0];
for(let i = 0; i<listOfNumbers.length; i++){
  if(listOfNumbers[i]<=min){
    min = listOfNumbers[i];
  }
}
console.log("The min of [" + listOfNumbers + "] is " + min);

//printing all elements greater than 0
console.log("Printing all elements greater than 0: ")
for(let i = 0; i<listOfNumbers.length; i++){
  if(listOfNumbers[i]>0){
    console.log(listOfNumbers[i]);
  }
}

//printing all elements greater than 'k'
let k = 7;
console.log("Printing all elements greater than k (" + k + "): ");
for(let i = 0; i<listOfNumbers.length; i++){
  if(listOfNumbers[i]>k){
    console.log(listOfNumbers[i]);
  }
}

//printing out all even numbers
console.log("Printing out all even elements");
for(let i = 0; i<listOfNumbers.length; i++){
  if(listOfNumbers[i]%2 === 0){
    console.log(listOfNumbers[i]);
  }
}

//printing out elements sorted from smallest to largest
console.log("Printing out elements sorted from smallest to largest: ");
// listOfNumbers = listOfNumbers.sort();
listOfNumbers.sort(function (a, b){
  return a-b});

console.log(listOfNumbers);


//printing out elements sorted from largest to largest
console.log("Printing out elements sorted from largest to smallest: ");
// listOfNumbers = listOfNumbers.sort();
listOfNumbers.sort(function (a, b){
  return b-a});

console.log(listOfNumbers);
