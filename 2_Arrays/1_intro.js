// Introduction to Arrays 
// Array is a collection of elements (ordered collection of items)

let fruits = ["Apple", "Banana", "Orange", "mango"];
let numbers = [1,2,3,8,57,9.0,"Hello",null, undefined];
console.log(fruits);

// Access particular element using indexing
console.log(fruits[1]);
console.log(fruits[3]);
console.log(fruits[0]);

console.log(numbers);

// Change particular element

fruits[0] = "Chikoo";

console.log(fruits);

console.log(typeof(fruits));
console.log(Array.isArray(fruits))


let obj = {} //object literal

console.log(Array.isArray(obj))
