// Block Scope vs Function Scope

// let and const are block scope we cannot access them in out of that block
// var is a function scope we cannot access them 

{
    let fn = "Prashant Sarvaiya"
    let age = 90;
    var gender = "male"
}

// console.log(fn);
console.log(gender);

function myApp(){
    if(true){
        let fn = "Prashant Sarvaiya"
        console.log(fn);
    }
    console.log(fn);
}

myApp();