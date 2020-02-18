let listOfStrings = ['red', 'needle', 'zippity doo da', 'bob', 'yellow', 'arkansas', 'green', 'blue', 'violet', 'indigo']

// printing out the longest string
console.log("Here's the array of strings: " + listOfStrings + "\n");
console.log("Printing out the longest string: ");
let longest = listOfStrings[0];
for(let i = 0; i<listOfStrings.length; i++){
  if(listOfStrings[i].length>= longest.length){
    longest = listOfStrings[i];
  }
}
console.log(longest + "\n");

// printing out the shortest string
console.log("Printing out the shortest string: ")
let shortest = listOfStrings[0];
for(let i = 0; i<listOfStrings.length; i++){
  if(listOfStrings[i].length<= shortest.length){
    shortest = listOfStrings[i];
  }
}
console.log(shortest + "\n");

// printing out all the strings longer than 3 characters
console.log("Printing out all the strings longer than `3` characters: ");
for(let i = 0; i<listOfStrings.length; i++){
  if(listOfStrings[i].length> 3){
    console.log(listOfStrings[i]);
  }
}
console.log("\n");

// printing out all strings longer than `minLength` characters
console.log("Printing out all strings longer than `minLength` characters");
let minLength = 4;
console.log("Current minLength is: " + minLength);
for(let i = 0; i<listOfStrings.length; i++){
  if(listOfStrings[i].length>minLength){
    console.log(listOfStrings[i]);
  }
}
console.log("\n");

// printing out the first string that begins with the letter `A`
console.log("Printing out the first string that begins with the letter `A`");
for(let i = 0; i<listOfStrings.length; i++){
  if(listOfStrings[i].charAt(0) === 'a' || listOfStrings[i].charAt(0) === 'A'){
    console.log(listOfStrings[i]);
  }
}
console.log("\n");

// printing out 'found it!' if listOfStrings contains 'needle'
console.log("Printing out 'found it!' if listOfStrings contains the string 'needle': ");
for(let i = 0; i<listOfStrings.length; i++){
  if(listOfStrings[i] === 'needle'){
    console.log("found it!");
    break;
  }
}
console.log("\n");

// printing out elements of `listOfStrings` sorted alphabetically (from A to Z)
console.log("Printing out elements of `listOfStrings` sorted alphabetically (from A to Z):");
listOfStrings.sort();
console.log(listOfStrings);

// printing out elements of `listOfStrings` sorted reverse alphabetically (from Z to A)
console.log("Printing out elements of `listOfStrings` sorted reverse alphabetically (from Z to A):");
listOfStrings.sort();
let newList = [];
let index = 0;
for(let i = listOfStrings.length-1; i>=0; i--){
  newList[index] = listOfStrings[i];
  index++;
}
listOfStrings = newList;
console.log(newList);
