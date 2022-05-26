
//---Block scope
// let a = 1
// if (a) {
//   let a = 2;
//   console.log(a)
// }
// console.log(a)
//---Function scope
// let b = 1

function foo() {
  var b = 2
  if (true) {
    let b = 3
    console.log(b)
  }
  console.log(b)
}
foo()
console.log(b)