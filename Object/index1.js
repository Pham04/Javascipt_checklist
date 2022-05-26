// let myObject = {
//     firstName: 'Pham',
//     lastName: 'Cuong',
//     getName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// let myObject2 = new Object()
// console.log(myObject2.toString())

// new Operator vs Object.create()
//
function Animal()
{
 this.name = null;
}

Animal.prototype.getName = function()
{
 return this.name;
}

var animalObj1 = Object.create(Animal)
console.log(animalObj1)
var animalObj2 = new Animal();
console.log(animalObj2)
