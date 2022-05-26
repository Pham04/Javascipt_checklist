//-----------MAP-----------
// Object: key-value && Array: Ordered(index), any type

const map = new Map(); // create new map

const myMap = new Map([
  [1, 'R1'],
  ['type', 'Sport bike'],
  ['HP', 200],
]); // initialize map 
// console.log(myMap)
//add value to Map 
//
myMap.set('name', 'String') // String
myMap.set(2, 'Integer') // Integer
myMap.set(true, 'Boolean') // Boolean
const obj = {name: 'object', type: 'set()'}
myMap.set(obj, 'Object') // Object

// console.log(myMap)

// //get value of Map

// console.log(myMap.get('name'))

// //Map Properties

// console.log(myMap.size) // number of pairs
// console.log(myMap.has(obj)) // check if have => boolean
// myMap.delete(2) // delete element
// console.log(myMap) 
// // myMap.clear() // delete all
// console.log(myMap)

// //MapIterator

// console.log(myMap.keys()) // all keys
// console.log(myMap.values()) // all values
// console.log(myMap.entries()) // all pairs

// //Loops a Map

// //with forEach()

// myMap.forEach((value, key) => {
//   console.log(key, value)
// })

// //with for-of

// for(const [key, value] of myMap) {
//   console.log(key, value)
// }


//convert an object into map

const address = {
  'Tapas': 'Bangalore',
  'James': 'Huston',
  'Selva': 'Srilanka'
};

console.log(Object.entries(address))

const addressMap = new Map(Object.entries(address));
console.log(addressMap)

//convert a map into a array

console.log(Array.from(myMap))
console.log([...myMap])