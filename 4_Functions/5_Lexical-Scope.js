// Lexical Scope

const myApp = () => {
    const myVar = "value1";
    function sayHello() {
        // const myVar = "value69";
        console.log("Hello World!!!!", myVar);
    }
    const myFunc2 = function(){

    }
    const myFunc3 = function(){

    }
    console.log(myVar);
    sayHello();

}

myApp();


// myApp is a lexical environment of sayHello 
// If sayHello cannot find a variable inside itself then use the lexical environment variables
// First check by itself then check lexical environment and then global environment it also known as closures