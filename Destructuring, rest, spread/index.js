
// //Destructuring
// const note = {
//     id:1,
//     title: 'My first note',
//     date: '01/01/1999'
// }
// //normal variable declaration
// const id = note.id;
// const title = note.title;
// const date = note.date;
// // => using destructuring 
// const { id1, title1, data1 } = note;

// const note2 = {
//     id: 1,
//     title: 'My first note',
//     date: '01/01/1970',
//     author: {
//       firstName: 'Sherlock',
//       lastName: 'Holmes',
//     },
// };
// // nested destructuring
// const { id2, title2, date2, author, author: { firstName, lastName }} = note2;
// console.log(`${firstName} ${lastName}`);
// console.log(author);

// //
// const testedArray = [{id:1}]
// testedArray.push({id:2})
// console.log(testedArray)

// // rest operator

// function testArguments() {
//     console.log(arguments)
//   }
  
// testArguments('how', 'many', 'arguments')

// // Rest can be used when destructuring arrays as well:

// const [firstTool, ...rest] = ['hammer', 'screwdriver', 'wrench']

// console.log(firstTool)
// console.log(rest)

// ///
// //
// //
// //
// // Shallow Copy
// let ingredients_list = ["noodles",{"list":["eggs","flour","water"]}];

// let ingredients_list_copy = Array.from(ingredients_list);
// console.log(ingredients_list_copy);
// // ["noodles",{"list":["eggs","flour","water"]}]

// //------try to change the clone -> also change the origin
// ingredients_list_copy[1].list = ["rice flour","water"]
// console.log(ingredients_list[1].list);
// // Array [ "rice flour", "water" ]
// console.log(ingredients_list);
// // ["noodles",{"list":["rice flour","water"]}]

// // ----- assign with Primitive type -> deep copy
// ingredients_list_copy[1] = "rice noodles"
// console.log(ingredients_list)
// // noodles
// console.log(ingredients_list_copy);

//
//
//
//------ Deep copy with Parse/Stringify ------
// let array = [1, 2, 3, 4, 5, {name: 'deep copy'}, function isDeep() { console.log('copy function ?')}]

// let newArray = JSON.parse(JSON.stringify(array))
// newArray[0] = 10
// newArray[5].name = 'edited deep copy'

// console.log(array)
// console.log(newArray)

// ------ Shallow Copy with Spread ------
// let array = [1, 2, 3, 4, 5, {name: 'deep copy'}, [6, 7], null]

// let newArray = [...array]
// newArray[0] = 10
// newArray[5].name = 'edited deep copy'
// newArray[6][0] = 20
// newArray[7] = 30

// console.log(array)
// console.log(newArray)

// ------ Deep copy with Recursion -------
// let myArray = [1, 2, 3, 4, 5, {name: 'deep copy'}, [6, 7]]
// const deepCopyWithSpread = (inObject) => {
//     let outObject, value, key

//     if (typeof inObject !== "object" || inObject === null) {
//         return inObject // Return the value if inObject is not an object
//     }

//     outObject = Array.isArray(inObject) ? [] : {}
   
//     for (key in inObject) {
//         value = inObject[key]
//         outObject[key] = deepCopyWithSpread(value) // recursion
//     }

//     return outObject
// }

// let newArray = deepCopyWithSpread(myArray)
// console.log(newArray)
//------- Deep copy with lodash lib -------
import _ from 'lodash';

let myArray = [1, 2, 3, 4, 5, {name: 'deep copy'}, [6, 7]]

var newArray = _.cloneDeep(myArray);

newArray[0] = 10
newArray[5].name = 'edited deep copy'
newArray[6][0] = 20

console.log(newArray)
console.log(myArray)



