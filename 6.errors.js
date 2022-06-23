
//Catching errors

//error: number is not defined 
// if(number === 1){
//   console.log("Number is equal to 1");
// }

// try{}catch(error) --> for errot catching

try{
  //tries to execute if statement
  if(number === 1){
  console.log("Number is equal to 1");
  }
}catch(error){
//the error caught goes in var error
  //console.log(error);
  console.log("Something happened: " + error.message); //prints error on screen
}finally{
  console.log("Finally a fost executat"); //executes all the time
}

















