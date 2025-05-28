// Array Destructuring : is a way to extract value from an array and assign them into saprate variables

const myArray =  ["v1","v2"]


// I want to stor both value in 2 different arrays

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];


let [myvar1, myvar2] = myArray

console.log(myvar1);
console.log(myvar2);