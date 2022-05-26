// //Object prototype

// function MyObject(firstName, lastName) {
//   this.firstName = firstName,
//   this.lastName = lastName,
//   this.getName = function() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// MyObject.prototype.score = 10
// var obj1 = new MyObject('Cuong', 'Pham')
// console.log(obj1)
// console.log(obj1.score)


// const test = Object.prototype;
// console.log(Object.prototype)
// console.log(Function.prototype)

// // writable, configurable, enumarable
// "use strict"
// let user = {
//   name: 'Cuong'
// };
// // property descriptor object contain the value and all 3 flags(writable, configurable, enumarable)
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// console.log(descriptor); 

// /* => 
// configurable: true, 
// enumerable: true, 
// writable: true, 
// value: "Cuong" */
// //-------General--------
// //update existing properties and flags (overide)
// Object.defineProperty(user, 'name', {
//   value: 'Cuong2', 
//   writable: false
// });

// let descriptor2 = Object.getOwnPropertyDescriptor(user, 'name');

// console.log(descriptor2); 
// // create properties and flags (default set to false ) from scratch
// let user2 = {};

// Object.defineProperty(user2, 'name', {
//   value: 'Cuong3'
// });

// let descriptor3 = Object.getOwnPropertyDescriptor(user2, 'name');

// console.log(descriptor3); 
// //-------Writable--------
// let book = {};

// Object.defineProperty(book, 'name', {
//   value: 'Harry Potter 1',
//   configurable: true, // default -> configurable: false, enumerable: false
//   // enumerable: true 
// });
// console.log(book.name);
// book.name = 'Edited Harry Potter 1'; // cannot re-assign non-writable properties
// console.log(book.name);

//-------Configurable--------
// Object.defineProperty(book, 'name', {
//   writable: true
// }) // redefined flags -> Error
// book.name = 'Edited Harry Potter 1222222'; // can change value still
// console.log(book.name);

// //-------Enumarable--------
// for (let property in book) {
//   console.log(property)
// }

// //-------Properties--------
// let course = {};

// Object.defineProperties(course, {
//   name: {value: 'React', writable: true},
//   id: {value: 124080394, configurable:true},
//   cost: {value: 'free', enumerable: true}
// })

// let descriptorsName = Object.getOwnPropertyDescriptor(course, 'name');
// let descriptorsId = Object.getOwnPropertyDescriptor(course, 'id');
// let descriptorsCost = Object.getOwnPropertyDescriptor(course, 'cost');

// console.log(descriptorsName)
// console.log(descriptorsId)
// console.log(descriptorsCost)




