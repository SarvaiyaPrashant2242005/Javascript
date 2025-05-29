// Arrow funcction
const sayHello = () => {
    console.log("HIII");
}

sayHello();



const sum = (num1,num2) => {
    return num1+num2;
}

console.log(sum(1,2));

// Hoisting is a behavious of javascript to take the variables at the top of the scope


// Normal Function Declaration : it is hoisted and tricky in event handlers
// Function Expression : It is not hoisted and useful for passign function as arguments
// Arrow function  : useful for inline or callback function and not hoisted 