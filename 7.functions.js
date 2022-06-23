//Functions

//displayNmae = function name
// name = function param

//** function name selected  + F2 => modifies function  name in all instances (function call)

function personDetails(name, age, email){
  console.log("My anme is "  + name); 
  console.log("My age is " + age);
  console.log("My email is: "+ email);
}

//function call
personDetails("Adina", 30, "test@test.com");

//function call with no args
personDetails(); //undedefined



//Anonime functions
//CALLBACK = a function passed to another func; it executes at finish

function function1(anotherFunction){
  console.log("Progessing..."); 
  anotherFunction(); //anotherFunction -> callback
}

//anotherFunction = parametru 

//apelez function1 cu function() ca argument = fct anonima care afiseaza mesajul
//functia anonima function() -> declarata direct inline, nu are nume executa console.log
function1(function(){
  console.log("Function executed");
});

//arrow function 
function1(() => console.log("Function executed"));

//Arrow function
((myName) => {
  console.log(myName);
})(); // self executing 

/*
self executing functions
 - wrapped in ()
 - ends in ();
*/






