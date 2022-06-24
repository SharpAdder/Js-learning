//classes and objects; classes are not hoisted
//obj ->implemented in ES6 Ecma Script6 in 2015 
//object literal -> not resulted from class
const employee = {
  Age: 30,
  Name: "John"
}

//classes -> blueprints for objects
//declare class Person
//constructor = method that builds the object

class Person{
//private fields declaration
  
  #firstName
  #lastName
  #dateOfBirth
  constructor(firstName, lastName, dateOfBirth){

    // this. --> data from constructor goes to obj
    //added fields: firstName, lastName, dateOfBirth to class
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#dateOfBirth = dateOfBirth;
  }

  //class method -> calc age
  calculateAge(){
    //new Date() -> builds obj with current date
    // .getFullYear() -> current year
    return new Date().getFullYear() - this.#dateOfBirth.getFullYear();
  }
}

//instantiate an obj from class
//create obj p from the person class
//new Person --> creates obj by executing the constructor

var p = new Person("Adina", "Doe", new Date("1986"));
console.log(p.calculateAge()); // 36
console.log(p.firstName) //undefined --> private fields










