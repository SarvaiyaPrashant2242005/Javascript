console.log("Script is Started!!!!");

function sayHello(){
    console.log("Hello World");
}



const id = setTimeout(sayHello, 0);    //function name and after how much millisecond you want to excecute

for(let i=0;i<100;i++){
    console.log(".....");
}

console.log("Script Ended!!!");
console.log(id);
console.log("Clearing Time out");
clearTimeout(id);

// output
// script started 
// script ended
// Hello World!!


// how it is happening????

// setTimeout is providing by the browser so the task will given to the browser
// JS gives the timeout function to the browser and runs the remaining code
// afterwords the script is ended!!!
// After 1 second callback function is passed to callback queue, 
// If eventloop founds GEC free or has no excecution then the call back function is passed to the callstack
// INSIDE setTimeout will be exceucute after whole scripts end


// setTimeout returns an id which is used to clear that timeout while we do not want to excecute that timeout


