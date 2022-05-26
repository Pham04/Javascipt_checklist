// //------This in declaration function------
// function foo() {
//   'use strict' // undefined
//   console.log(this)
// }
// foo() // Window


//------ this in arrow function ------
// function Person() {
//   this.name = 'Cuong';
//   this.age = 23;
//   this.getAge = function () {
//     console.log(this) //execution context: inside Person -> this ? -> Person
//     function innerFunc() {
//       console.log(this) // execution context : inside getAge -> this ? -> none -> Default global -> window
//     }
//     innerFunc()
//   }

// }

// const test = new Person();
// test.getAge()

// class Example {
//   constructor() {
    
//     console.log(this); //
//   }
//   first(){}
//   second(){}
//   static third(){}
// }

// new Example(); // ['constructor', 'first', 'second']
// console.log(Example.prototype)


// //------bind()------
// this.firstName = 'Pham';
// this.lastName = 'Cuong';

// const brother = {
//   firstName: 'Pham',
//   lastName: 'Trung',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const friend = {
//   firstName: 'Hoang',
//   lastName: 'Nam'
// }

// console.log(brother.getFullName())

// const myName = brother.getFullName
// console.log(myName === brother.getFullName) //true
// // create new function
// const newMyName = brother.getFullName.bind(friend)
// console.log(newMyName === brother.getFullName) //false

// // console.log(myName())


//------Function borrow------
const Vehicle = {
  name: 'Vehicle',
  type: 'vehicle',
  start: function() { 
      return `starting the ${this.name} ${this.type}`
  },
  stop: function() {
      return `stopped the ${this.name} ${this.type}`
  }
};

const car = { name: 'Toyota', type: 'car' }
console.log(Vehicle.start.call(car)) // returns starting the car Toyota
console.log(Vehicle.stop.call(car)) // stopped the Toyota car
