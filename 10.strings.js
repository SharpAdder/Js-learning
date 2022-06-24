//siruri de caractere

let firstName = "Adder";
let secondName = "Ada";
let fullName = `Adder Ada`;

console.log(firstName[1]); // d ->2nd char from firstName
firstName[0] ="x";
console.log(firstName); //Adder --> doesn't change

//operastion on string

//.length --> how long is  the string
console.log(fullName.length); //9

//concatenate strings: +, +=
console.log("fullName string length is: "+fullName.length);

//indexOf() --> check if a string has a substring
//check if string firstName has the letter o
console.log(firstName.indexOf("o") > -1); //false

//substring() -> extracts a substring from a string
//first parameter -> start of substring
//second parameter --> end of substring
console.log(fullName.substring(2,5)); //der

//substr --> extracts substring
// first param --> start of substr
//second param --> length of resulting substring 
console.log(fullName.substr(2,5)); //der A -->deprecated


//includes() --> check if a str has another substr
console.log(fullName.includes("aria")); //false

//replace() --> replace a substr from a string with another value
//doesn't modify the initial string
let pets = "cat, dog, hamster";
pets.replace("cat", "fish");
console.log(pets); //cat, dog, hamster

//to log the new string make fisrt str/another str var = pets.replace()
let newPets = pets.replace("cat", "fish");
console.log(newPets);

//split() --> transforms a string into array based on a separator
let petList = pets.split(",");
console.log(petList);

//trim() --> extracts all spaces from beginnig of string and string end
let spaceString = "    cat   ";
//log spaceStrinh with spaces, without spaces, length of string without space
console.log(spaceString, spaceString.length, spaceString.trim(), spaceString.trim().length);

//escape characters
let string2 = 'some "other" text';
// \"" -> escape; \', \\, \n, \r, \t (horizontal tab), \v (vertical tab)
let string3 = "some \"other\" text";
console.log(string3);

let string4 = "singleQuote \', doubleQuotes \", newLine \n, backSlash\\, tab\t, verticalTab\v";
console.log(string4);

//string templates -> sabloane
//with concatenate
let template = 'hello.' + 
'this is a long string' + 
'for testing templates';
console.log(template);

//no concatenation
let template2 = `hello.
 this is a long string
 for testing templates`;
console.log(template2);

//template literal
let template3 = `hello ${fullName}.
 this is a long string
 for testing templates`;
console.log(template3);
