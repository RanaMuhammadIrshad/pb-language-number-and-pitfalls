# Strings and Numbers
## Instructions
- **Work in the file `solution.js`**

## 1. Concatenation
* Create two variables `introSentence` and `age`. The first variable should contain a string value and the second should contain a number. Concatenate the string and the number and log it to the console.
```javascript
let introSentence = "hello, my name is Fran and I am";
let age = 25;
```

**Expected Output**: 
```javascript
"hello, my name is Fran and I am 25"
```
* In this case, what is the `+` operator doing? Comment your answer in the js file.

## 2. Converting 
* Create a variable named `integer` and assign the string value of "1005" (including quotes). Convert it to a number and log it to the console.
* Create a variable named `float` and assign the string value of "10.05" (including quotes). Convert it to a number and log it to the console.



# Pitfalls
## Instructions
- **Work in the file `solution.js`**
- **Print each answer in the console, including the Question Number. e.g. "1.1. ..."**

#### 1. NaN
**Question: Comment your answer in your js file**: What does NaN stand for? 

1.1. Wrtite code that checks if `"hello"` is NaN and print the result to the Terminal
* Check if `3` is NaN. Print the result to the Terminal
* What is the type of NaN? Print the result to the Terminal

#### 2. Rounding 
```javascript
console.log(0.1 * 0.2);
```
The above in JavaScript will print: `0.020000000000000004`. 
Use a method to make sure that only `0.02` is printed to the Terminal

#### 3. Infinity
* Divide Infinity by `0`. Print the result to the Terminal
* Divide Infinity by Infinity. Print the result to the Terminal
* Divide `1` by `0`. Print the result to the Terminal
