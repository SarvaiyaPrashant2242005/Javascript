// Hoisting : Hoisting in JavaScript is a mechanism where declarations of variables, functions, 
//            and classes are moved to the top of their scope before code execution. 
//            This behavior allows you to use these elements before they are formally declared in the code. 


console.log(myFunc);
console.log(hello);


var myFunc = function(){
    console.log("Ye ek function He!!!!");
}  //it will not follow hoisting because we haven't use function declaration firstly it is treated like a function


function hello(){
    console.log("Hello World!!!!");
}



// While creating global excecuting context variables are already stored in the memory (var only)
// In the case of let and const     keyword the variables are remains uninitialized



console.log(firstName);
let firstName = "Prashant"
console.log(firstName);

// Hoisting of let and const keyword are done memory are allocated to both but it remains uninitialized

// Something like i have strings of violine but I do not have violine so string is useless....

// Timezone between uninitialized to initialized is called temporal time zone



console.log(typeof(firstName));