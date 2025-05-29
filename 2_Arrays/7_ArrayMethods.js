const numbers = [1,2,3,4,5,6,7,8,9,0]

// function myFunc(number ,index){
//     console.log(`index is ${index} and number is ${number}`);
// }

// for Each method
numbers.forEach(function(number, index){console.log(`index is ${index} and number is ${number}`);});


numbers.forEach(function(number){
    console.log(number*3);
})

const users = [
    {
        fn : "Prashant", age : 19
    },{
        fn : "Raju" , age:10
    },{
        fn: "Ramesh"  , age:90
    }
]

users.forEach(function(user){
    console.log(user.fn);
})



// Map Method

const square = function(number){
    return number*number;
}
const sqare = numbers.map(square);
console.log(numbers);
console.log(sqare);


// Filter Method

const isEven = function(num) {
    return num%2==0;
}
const even = numbers.filter(isEven);

console.log(even);




// Reduce method

// Aim to sum the numbers of an array

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

console.log(sum);

// Accumulator  , CurrentValue , return
//  1           ,   2         , 3
//  3           ,   3         , 6
//  6           ,   4         , 10
//  10          ,   5         , 15


// Sort Method

myArray = [9,2,400,3,600,4,2]
console.log(myArray);
console.log(myArray.sort());  //Will change the original Array
console.log(myArray);



// Low to High

const product = [
    {productId : 1, productName : "p1" , price : 300 },
    {productId : 2, productName : "p2" , price : 900 },
    {productId : 3, productName : "p3" , price : 100 },
    {productId : 4, productName : "p4" , price : 200 },
    {productId : 5, productName : "p5" , price : 700 }
    
]

const lowToHigh =  product.slice(0).sort((a,b) => {
    return a.price - b.price;
})

console.log(product);
console.log(lowToHigh);


// High to Low

const HighToLow = product.slice(0).sort((a,b) => {
    return b.price - a.price
})

console.log(HighToLow);



// Find method

let myArray1 = ["Hello", "cat", "dog", "LION"]

function isLength3(string){
    return string.length == 3;
} 

console.log(myArray1.find(isLength3)); //pass the whole array to the function and return first occurence with length 3



// Every method

const numberss = [2,8,4,90,76,4,2]

// I want to find if every number is even or not
const answer = numberss.every((number) => number%2 == 0)

// If the condition is true for every element then only it will give true else false

console.log(answer);


// some methods

// Checks if any number is even
const jawab = numberss.some((number) => number%2 == 0)
console.log(jawab);



// Fill Method
// [fill,start,end]

const MYArray = new Array(10).fill(-1);

console.log(MYArray);

const meraArray = [1,2,3,4,5,6,7,8]

// I want to replace 3 -> 0

meraArray.fill(0,2,4);
console.log(meraArray);
