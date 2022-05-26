// //-----------------Callback---------------------
// // A callback function is a function passed into another function as an argument -> then invoked inside the outer function to complete a task

// // callback function will be executed when an asynchronous operation complete

// function getName(firstName, lastName) {
//   console.log(`Your name is ${firstName} ${lastName}`)
// }

// function outerFunction (callback) {
//   const firstName = 'Pham'
//   const lastName = 'Cuong'
//   callback(firstName, lastName)
// }

// outerFunction(getName) // getName is a callback function (synchronous)





// // why do we need callback?

// // Only invoked when outer function called
// //this is a mock API call
// function counter() {
//   setTimeout(() => {
//     console.log(3)
//     setTimeout(() => {
//       console.log(2)
//       setTimeout(() => {
//         console.log(1)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// } // nested callback => callback hell => -------PROMISE

// counter() 








// //-----------------Promise---------------------
// // an better JS object to handle asynchronous operations
// // a promise may have 1 of 3 states:
// // 1. Pending : process is not complete
// // 2. Fulfilled : if process successful
// // 3. Rejected : if process error

// const logic = true;
// let myPromise = new Promise(function(resolve, reject) {
//   if (logic) {
//     const result = 'Logic successful!'
//     resolve(result) // successful
//   } else {
//     const result = 'Logic failed!'
//     reject(result) // error
//   }
// })

// //handle fulfilled, rejected

// myPromise
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((result) => {
//     console.log(result)
//   })
//   .finally(() => {
//     console.log('finally')
//   })







// // -------------Promise.all-------------
// //A promise that takes an array of promises as an input ( an iterable ///) . Then it gets resolved when  all promise get resolved or any one of //them get rejected
// const timeOut = (t) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Completed in ${t}`)
//     }, t)
//   })
// }

// const durations = [1000, 2000, 3000]

// const promises = []

// durations.map((duration) => {
//   promises.push(timeOut(duration)) 
// })

// console.log(promises) // [ Promise { "pending" }, Promise { "pending" }, Promise { "pending" } ]
// Promise.all(promises)
// .then(response => console.log(response)) 
// // ---------every promise is an async action -> add to queue orderly : promise1, promise2, promise3 -> promise1 have to wait for promise3 to complete -> 3s to resolve all






// //-------------Promise.allSettled----------
// //return an array of result objects ( status, value )
// const timeOut = (t) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Completed in ${t}`)
//     }, t)
//   })
// }

// const durations = [1000, 2000, 3000]

// const promises = []

// durations.map((duration) => {
//   promises.push(timeOut(duration)) 
// })

// Promise.allSettled(promises)
// .then(response => console.log(response)) 










// //------------Async/await--------------

// // make asynchronous actions behave like synchronous ones
// // async stand alone only can represent that function is async -> return promise -> does not make nay different
// async function asyncFunc() {
//   console.log('Async function')
//   return Promise.resolve(1)
// }

// asyncFunc().then((result) => console.log(result))
// // same




// // async with await

// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 2000)
//   });

//   let result = await promise; // wait until the promise resolves (*)
//   console.log('interrupt!!') // it wait for an asynchronous action to resolve, just like sync action
//   alert(result); // "done!"
// }

// f();




// async await with for loops https://zellwk.com/blog/async-await-in-loops/

const fruitBasket = {
  apple: 27,
  grape: 0,
  pear: 14
}

const fruitsToGet = ['apple', 'grape', 'pear']

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const getNumFruit = fruit => {
  return sleep(1000).then(v => fruitBasket[fruit])
}



// // forLoop
// const forLoop = async () => {
//   console.log('Start')

//   for (let index = 0; index < fruitsToGet.length; index++) {
//     const fruit = fruitsToGet[index]
//     const numFruit = await getNumFruit(fruit)
//     console.log(numFruit)
//   }

//   console.log('End')
// }

// forLoop() // ok 



// //forEachLoop

// const forEachLoop = () => {
//   console.log('Start')

//   fruitsToGet.forEach(async fruit => {
//     const numFruit = await getNumFruit(fruit)
//     console.log(numFruit)
//   })

//   console.log('End')
// }

// forEachLoop() //await alway return promise -> not support await because forEach only return 1 time at last 




// await with map 

const mapLoop = async () => {
  console.log('Start')

  const promises = fruitsToGet.map(async fruit => {
    const numFruit = await getNumFruit(fruit)
    return numFruit // push to a return array
  })

  const numFruit = await Promise.all(promises)
  console.log(numFruit)
  console.log('End')
}

mapLoop()



