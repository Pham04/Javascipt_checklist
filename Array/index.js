const array1 = [1, 2, 3, 4, 5];

// ------ForEach------
// array1.forEach(element => console.log(element))
// array1.forEach((element, index) => console.log(element, index))
// array1.forEach((element, index, array) => console.log(element, index, array))

function checkEqual(number) {
    array1.forEach((item) => {
        if (item === number) {
            return true
        }
        
    })
    return false
}

console.log(checkEqual(3))

// //callbackFn with thisArg
// function Counter() {
//   this.sum = 0
//   this.count = 0
// }




// Counter.prototype.add = function(array) {
//   array.forEach(function countEntry(element) {
//     this.sum += element;
//     ++this.count;
//   }, this)//thisArg will reference to object Counter
// }

// var obj = new Counter();
// obj.add(array1)

// console.log(obj.sum, obj.count)





// // ------ForEach with async------
// let sum = 0;

// const sumFunc = async(a, b) => a + b;

// array1.forEach(async (element) => {
//     sum = await sumFunc(sum, element);
// })

// console.log(sum)





const getPost = async (id) => {
    return await (await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)).json();
}

// const useForEach = (array) => {
//     array.forEach(async (id) => {
//         const data = await getPost(id);
//         console.log(data)
//     })
//     console.log('leu leu, khong doi dau!')
// }

//------for for/in for/of forEach------
const array2 = [1, 2, 3, 4, [5, 6]]
//for
const result2 = array2.filter(element => {
    return element >= 3
})
console.log(result2)
// array2.test = 'bad';
// console.log(array2)

// for 
// for(let i = 0;i < array2.length; i++) {
//     console.log(array2[i]) // ignore type object
// } 

// for of
// for(let element of array2) {
//     console.log(element) // ignore type object
// } 


// forEach
// array2.forEach(element => console.log(element)) // ignore type object

// for/in
// for(let index in array1) {
//     console.log(in) // -> only log key
// } 

// useForEach(array1)
//alternative#1: for

// const alterFor = async (array) => {
//     for(let i = 0; i< array.length; i++) {
//         const data = await getPost(array[i])
//         console.log(data)
//     }
//     console.log('leu leu, khong doi dau!')
// }

// alterFor(array1)

//alternative#2: for of

// const alterForOf = async (array) => {
//     for(let id of array) {
//         const data = await getPost(id)
//         console.log(data)
//     }
//     console.log('leu leu, khong doi dau!')
// }

// //------myForEach------
// Array.prototype.myForEach = function(callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             callback(this[index], index, this)
//         }
//     }
// }

const myArray = [1,2,3]

// myArray.myForEach((element) => {console.log(element)})

// //------myFilter-------
// Array.prototype.myFilter = function(callback) {
//     let output = []
//     for(var index in this) {
//         if (this.hasOwnProperty(index)) {
//             let result = callback(this[index], index, this)
//             if (result) {
//                 output.push(this[index])
//             }
//         }
//     }
//     return output
// }

// console.log(myArray.myFilter((element) => element >= 2))

//------myReduce------
// Array.prototype.myReduce = function(callback, initialValue) {
//     let output = 0
//     if (initialValue !== undefined) {
//         output += initialValue
//     }
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//              output = callback(output, this[index], index, this)  
//         }
//     }
//     return output
// }

// console.log(myArray.myReduce((a, b) => a + b, 7))

//------



