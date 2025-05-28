//For Loops

let fruits = ["Mango", "Apple", "Banana", "Chikoo"];

console.log(fruits.length)

// Last index = length - 1
let fruits1 = []
for(let i=0;i<fruits.length;i++){
    // console.log(fruits[i].toUpperCase());
    fruits1.push(fruits[i].toUpperCase());
}

console.log(fruits);
console.log(fruits1);



// For of loop

for(let fruit of fruits){
    console.log(fruit.toUpperCase());
}


// For in loop

for (let f in fruits){
    console.log([f]);
}