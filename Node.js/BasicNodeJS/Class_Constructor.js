//CLASS DEFINITION:
class Person {
  constructor(name) {   //This constructor expects a name argument to be passed in when an object is created.
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}!`);
  }
}

//INHERITANCE: use keyword 'extends'
class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
  greet() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}

//NEW keyword to create new class objects
const o1 = new Person("Max");
const o2 = new Student("Tina", "1st Grade");
const o3 = new Student("Mary", "2nd Grade");

//CALL AN OBJECT METHOD
o3.greet = () => console.log('I am special!');  //result: 'I am special!' //this uses a directly defined method that overrides the called method.
o1.greet();   //result: `Hello Max!`
o2.greet();   //result: `Hello Tina from 1st Grade`
o3.greet();   //result: `Hello Mary from 2nd Grade`
