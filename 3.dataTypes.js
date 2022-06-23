//Data Types: primitives & Objects

//Primitives
//1. Boolean: true false

let boolean = false;
console.log(typeof(boolean));

//2. null;  --> object
let n = null;
console.log(typeof(n));

//3. undefined; variable declared, no value attributed
let undf = undefined;
console.log(typeof(undf));

//4. number
let num = 123;
console.log(typeof(num));

//5. Bigint

//6. String
let str = "Hello";
console.log(typeof(str));

//Objects (key : value pairs);  Object literals

//JSON = JavaScript Object Notation
let person1 = {
  age: 20,
  name: "Adina"
};

let person2 = {
  age: 30,
  name: "Mihai"
};

console.log(person1);

//2 Arrays
const hobbies = ["Cooking", "Reading", "Coding"];
console.log(hobbies);

//accessing array elements
console.log(hobbies[2]); //Coding

const prices = [12.5, 13.3, 23.99];
console.log(prices);

//extcting an element from array
const reading = hobbies[1];
console.log(reading);

//index > array.length => undefined
let indexDepasit = hobbies[5];
console.log(indexDepasit); //undefined


//Array with Objects
//person array has person1 obj & person2 obj
const persons = [person1, person2];
console.log(persons);

//creating objects in array (inline)

const people = [{id: 1, age: 35, email:"johnDoe@gmail.com"},
                {id: 2, age: 26, email: "janeDoe@gmail.com"}];
console.log(people);






























