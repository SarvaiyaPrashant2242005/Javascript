// Primitive vs reference data types


// Primitive type
let num1 = 8;
let num2 = num1;

console.log("value of num1 is ",num1);
console.log("value of num2 is ",num2);


num1++;
console.log(num1);
console.log(num2);


// Reference type

let array1 = ["item1", "item2"]
let array2 = array1;

console.log(array1);
console.log(array2);

array1.push("item3");
console.log(array1);
console.log(array2);


// Primitive datatypes stores as a stack in an array (do not take much memory)
// Referenec datatypes stores in a heap (use address from heap)