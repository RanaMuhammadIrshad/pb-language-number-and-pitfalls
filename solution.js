//1. Concatenation
const introSentence = "hello, my name is Fran and I am";
const age = 25;
const concatenationResult = introSentence + " " + age; //+ is converting number like age of 25 to string and also joining/concat different strings
console.log(concatenationResult);
console.log(typeof concatenationResult);

//2. Converting
//Create a variable named `integer` and assign the string value of "1005" (including quotes). Convert it to a number and log it to the console.
/* console.clear(); */
let integer = "1005";
console.log(integer);
console.log(typeof integer);
const stringToNumber = Number(integer);
console.log(stringToNumber);
console.log(typeof stringToNumber);

//Create a variable named `float` and assign the string value of "10.05" (including quotes). Convert it to a number and log it to the console.
/* console.clear(); */
let float = "10.05";
console.log(float);
console.log(typeof float);
const floatToNumber = Number(float);
console.log(floatToNumber);
console.log(typeof floatToNumber);




//Pitfalls

/* 1.1. Write code that checks if `"hello"` is NaN and print the result to the Terminal
 * Check if `3` is NaN. Print the result to the Terminal
 * What is the type of NaN? Print the result to the Terminal */

// NaN returns boolean value (true/false) to show that if the value is true or false.
let someString = `"hello"`;
let checkNan = isNaN(someString);
console.log(`1.1-a: ${checkNan}`); //true
let someString1 = `3`;
let checkNan1 = isNaN(someString1);
console.log(`1.1-b: ${checkNan1}`); //false

let typeOfNan = typeof NaN;
console.log(`1.1-c: ${typeOfNan}`); //Number

//2. Rounding

let num = 0.1 * 0.2;
console.log(`2-a: Number is: ${num}`);

const roundedNum = Number(num.toFixed(2));

console.log(`2-b: The rounded number to two decimal places is: ${roundedNum}`);
console.log(`2.c: The type of rounded number is: ${typeof roundedNum}`);

//  3. Infinity
console.clear();
let infinityByZero = Infinity / 0;
console.log(
  `3.1: Dividing infinity by zero the result is: ${infinityByZero}, and the type is: ${typeof infinityByZero}`
);

let infinityByInfinity = Infinity / Infinity;
console.log(
  `3.2: Dividing infinity by infinity the result is: ${infinityByInfinity}, and the type is: ${typeof infinityByInfinity}`
);

const oneByZero = 1 / 0;
console.log(
  `3.3: Dividing 1 by 0 the result is: ${oneByZero}, and the type is: ${typeof oneByZero}`
);
