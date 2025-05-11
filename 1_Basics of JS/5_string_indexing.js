let firstName = "Prashant";

// p r a s h a n t
// 0 1 2 3 4 5 6 7

console.log(firstName[3]);
console.log(firstName[10]);
console.log(firstName[4]);
console.log(firstName[2]);
console.log(firstName[1]);
console.log(firstName[0]);


// length of string
// firstName.length
console.log(firstName.length);


// lastindex length-1
console.log(firstName.length-1);
// Length starts from 1 and indexing start from 0



// trim()
// toUpperCase()
// toLowerCase()
// slice

let fn = "  Prashant  ";

console.log(fn.length)
let fn1 = fn.trim() //It will give a new string without spaces inspite of uodate previous one because strings are immutable
console.log(fn)
console.log(fn1)




// To convert all characters into capital / uppercase
console.log(fn1.toUpperCase())

// To convert all characters into lowercase
console.log(fn1.toLowerCase())


// slice can devide the string based on indexing

let myString = fn1.slice(0,4)

let myString1 = fn1.slice(0,9)

let myString2 = fn1.slice(0,3)

let myString3 = fn1.slice(3,8)


console.log(myString)
console.log(myString1)
console.log(myString2)
console.log(myString3)


