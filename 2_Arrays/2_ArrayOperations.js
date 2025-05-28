let fruits = ["Apple", "Banana", "Chikoo", "Grapes"]

// Push will add an element at the end of array
console.log(fruits);
fruits.push("mango");
console.log(fruits);


// pop removes the last element from an array and return the value
let PoppedFruit = fruits.pop()
console.log(fruits.pop())
console.log(fruits);

// Unshift the element at the starting of array
fruits.unshift("Orange");
fruits.unshift("Guavava");
console.log(fruits);

// shift remove first element from array and return that
fruits.shift()
console.log(fruits);


// Push and pop are faster then shift and unshift