// closurs
// Closures in JavaScript are a fundamental concept that allow a function 
// to access variables from its outer (enclosing) scope, even after that outer function has finished executing. 


// function outerFunction(){
//     function innerFunction(){
//         console.log("Hello World!!!");
//     }
//     return innerFunction;    //I can return anything string, array,object etc
// }

// const ans = outerFunction();

// console.log(ans);

// ans();









function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName,lastName);
    }
    return printName;
}

const ans = printFullName("Prashant", "Sarvaiya");

ans();