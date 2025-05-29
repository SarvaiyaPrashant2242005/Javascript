// Arrow function

const user1 = {
    firstName : "Prashant",
    age : 10,
    about : () => {
        console.log(this.firstName, this.age);
    }
}


user1.about.call(user1);


// Arrow function does not allow this 
// If a function is called as a standalone function, this refers to the global object (window in browsers, global in Node.js) or undefined in strict mode.