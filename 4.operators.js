
const name = "Adina";

//1. Arithmetic operators +, -, / *, ++, --

const sum = 1+1;
console.log(sum);

const difference = 2 - 1;
console.log(difference);

const division = 10 / 5;
console.log(division);

let multiplication = 10 *  5;
console.log(multiplication);

multiplication++; //51
console.log(multiplication);

multiplication--; //50
console.log(multiplication);

//2. Logic operators: and &&, or ||,  not !

//3. Conditional op ==, !=, ===, !==, >=, <=, <, >
const number1 = 12;
const number2 = 10;
const myName = "Adina";
const myNumber = "12";

//checks if values are equal
console.log(number1 == number2); //false 

//check if values are different
console.log(number1 != number2); //true 


console.log(number1 == myName); //false -->  12 != Adina
console.log(number1 == myNumber); //true -->  value 12 == string 12

//data type comparing
console.log(number1 === myNumber); //false 
console.log(number1 !== myNumber); //true 


console.log(number1 >= number2); //true --> 12 >= 10

//4. Attribution operators =, += --> addition assignment, /=, *=, -=

let myNumber2 = 20;
console.log("My number: " + myNumber2);
myNumber2 +=5;
console.log("My number after addition assigment: " + myNumber2);
console.log(myNumber2);



















