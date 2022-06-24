//Arrays -> data structure that holdes multiple values of different values

//array declaration & assignment
let numbers = [1,2,3, "cat", false];
console.log(numbers); //1,2,3, "cat", false

//length --> no of elements in array
console.log(`length: ${numbers.length}`); //5 elem.

//changing elements in array by index
//position of last elem in array -> array.length -1
numbers[0] = 5;
console.log(numbers); //5,2,3, "cat", false

//accesiing last elem from array
numbers[numbers.length-1] = true;
console.log(numbers); //5,2,3, "cat", true


//iterating array
for(let i=0; i<numbers.length; i++){
  console.log(numbers[i]);
  //5
  //2
  //3
  //cat
  //true
}

//push() --> adds a new elem at array end & returns array length
numbers.push(8);
console.log(numbers); //5,2,3, "cat", true, 8

//unshift() --> adds element at BEGINIG of array & returns array length
numbers.unshift(2);
console.log(numbers); //2,5,2,3, "cat", true, 8

//EXTRACTING ELEMENTS from array
//shift() -->exracts first elem in array & returns the element
let num = numbers.shift();
console.log(num); //2

//pop() --> extracts last elem in array & returns it
let num2 = numbers.pop();
console.log(num2); //8

//adter shift() & pop() -> initial array changed
console.log(numbers); //5,2,3, "cat", true


//indexOf() --> position of elem in array
let position = numbers.indexOf(2);
console.log(numbers, position); //5,2,3, "cat", true 1 --> index of2 is 1

//splice() --> removes elem from array based on its index
//first param --> start position
//2nd param --> no of elements to be removed
let removedElements = numbers.splice(1,1);
console.log(removedElements); //returns 2 (elem on index1) length:1


//join() --> joins array elem into string using a separator
let arr = ['one', 'two', 'zero'];
console.log(arr);

let stringArr = arr.join(", ");
console.log(stringArr);

//reverse() --> reverses array 
arr.reverse();
console.log(arr); // (3)'zero', 'two', 'one'
