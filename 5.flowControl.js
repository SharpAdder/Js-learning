//Flow control - code execution ->from first line to last line
console.log("line 1");
console.log("line 2");

//1. if/else
//using debugger --> in dev tools -> sources -> use break points
// debugger; // break points in sources (dev tools)
// F10 --> steps in debugger 
//F8 -> resume 
const age = 15;
if (age < 18){
  console.log("You are under aged.");
} else {
  console.log("You are an adult.");
}




//2. for loop; iterate array
const people = ["Bogdan", "Mihai", "Andreea", "Ovidiu"];

//people.length = 4 
//i0 = Bogdan, i1=Mihai, i2 = Andreea, i3 = Ovidiu

for (i=0; i<people.length; i++){
   console.log(people[i]);
 }

//reverse iteration (array doesn't change)
for (i=people.length-1; i>=0; i--){
  console.log(people[i]);
}

//3. while

let myNumber = 3;
 while(myNumber < 10){
 console.log(myNumber);
 myNumber++;
 }

//4. do while
// do {
//   myNumber++;
//   console.log(myNumber);
// }while(myNumber <= 10);

//5. switch 
//no break in switch --> will go through all cases

switch(myNumber){
  case 1: 
    console.log("myNumer este 1");
    break; //stops execution when condition true

  case 2:
    console.log("myNumer este 2");
    break;

  default:
    console.log("myNumber este defapt: " + myNumber);
}





