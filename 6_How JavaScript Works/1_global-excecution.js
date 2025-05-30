// How JS works

// 1) Compilation

// Compilation phase 
    // 1) Tokenization       ->  devide the code into chuncks
    // 2) PArsing            -> Understand the chunks and make abstract syntax tree
    // 3) Code Generation    -> Make a excecutable code


// Why Compilation
//  ----> 1) Early Error Cheching
//        2) Determining Appropriate scope for variables  (Function scope / Global Scope etc)


// 2) Code Excecution

//  How Code Excutes ????         
// In JS code excutes inside excecution context
// Need to create excecution context before excecution of code
// Firstly Global Excecution context made
        // Creation phase & Code Excecution phase
    
// In browser window is already provided by the browser so while running the js in the browser this ==  window object


// JS is synchronous programming Language and single threaded



console.log(this);
console.log(window);
console.log(myFunc);
console.log(fullName);



function myFunc(){                         //Global scope                                        
    console.log("Inside functiom\n");      //function scoper
}


var firstName = "Prshant"
var lastName = "Sarvaiya"
var fullName = firstName  + " " + lastName
console.log(fullName);


// Global scope --------------------------------------------------   Global Memory
// 1) print this binded with window                                     window : {}
// 2) print window function                                             this   : window
// 3) print whole function as it is                                     firstName : undefined
// 4) undefined                                                         lastName  : undefined
// 5) function                                                          fullName  : undefined
// 6) undefined to Prashant
// 7) undefined to Sarvaiya                                             myFunc    : f {}
// 8) concat
// 9) full name printed stored