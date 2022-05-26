// //------Constructor function------

// console.log(Person.prototype) // construtor:f

// function Person(name, age) {
//   this.name = name,
//   this.age = age
// }

// let cuong = new Person('Cuong', 23)
// // console.log(cuong)
// Person.prototype.gender = 'male'
// console.log(Person.prototype) // constructor:f, gender:male

// let nam = new Person('Nam', 23)
// nam.gender = 'female'
// console.log(nam)

// //-------Callback function-------

// function hello() {
//   console.log('Hello world')
// }

// setTimeout(hello, 3000);
// console.log('i dont wait for you')

//-------Closure-------
function createCounter() {
  let counter = 0

  function increase() {
    return counter += 1
  }
  return increase;
}

const counterIncrease = createCounter() 

console.log(counterIncrease()) // reference -> counter not be deleted -> counter = 1
console.log(counterIncrease()) //... counter +=1 -> counter = 2
console.log(counterIncrease())

//data privacy
var tryToChangeCounter = counter + 100; //=> Cannot
console.log(tryToChangeCounter) 

