let str1 = "ABCDEFG";
let str2 = "ABCD";

let concatenate = str1 + str2;

console.log("The value of str1 is: " + str1);
console.log("The value of str2 is: " + str2);
console.log("Concatenation of str1 and str2 is: " + concatenate);

let appears = str1.includes(str2);
console.log("str2 appears in str1: " + appears + "\n");

let waffles = "bananas";
let length = waffles.length;
console.log("The length of waffles is: " + length);

waffles = waffles.toUpperCase();
console.log("Uppercase of waffles is: " + waffles);
waffles = waffles.toLowerCase();
console.log("Lowercase of waffles is: " + waffles);
let k = 5;
let charAtK = waffles.charAt(k);
console.log("The character at index k of waffles is: " + charAtK);
waffles = waffles + "a";
console.log("Appending 'a' to waffles: " + waffles); 
console.log(`(Using template literals here) My favorite things in the world is ${waffles}$`);
