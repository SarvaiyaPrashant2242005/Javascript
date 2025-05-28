// Clone an Array


// Using slice
let array1 = ["item1", "item2"];
let array2 = array1.slice(0);

array1.push("item3")
console.log(array1);
console.log(array2);

// using cancat

let array3 = [].concat(array1);
array1.push("Item 4")
console.log(array1);
console.log(array3);



// Spread Operator

let array4 = [...array1];
array1.push("item5");
console.log(array1);
console.log(array4);

// What if i want some more items in array4 only

array4 = [...array1, "item89","item100"]
console.log(array4);