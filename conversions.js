let num1 = 1234;
console.log("The value of num1 is " + num1 + ", and num1 is: a " + typeof num1);
num1 = num1.toString();-
console.log("After converting num1 to a string, num1 is: a " + typeof num1 + "\n");

let bananas = '54321';
console.log("The value of 'bananas' is " + bananas + ", and 'bananas' is: a " + typeof bananas);
bananas = parseInt(bananas);
console.log("After converting 'bananas' to a number, 'bananas' is: a " + typeof bananas + "\n");

let fruit = "apples";
console.log("Here's the string: " + fruit);
fruit = fruit.split('');
console.log("Converting string to array of characters: " + fruit + "\n");

let array = ['one', '--two--', 'three'];
console.log("Here's the array: " + array);
array = array.join('');
console.log("Joining string elements together: " + array + "\n");

let newArray = ['one', 'two', 'three'];
console.log("Here's the array: " + newArray);
newArray = newArray.join('|');
console.log("Joining string elements together with '|': " + newArray);
