// Methods in JavaScript

// Method is a function inside an object

const person1 = {
    firstName : "Prashant",
    age : 18,
    about : personInfo
}
const person2 = {
    firstName : "Rahul",
    age : 31,
    about : personInfo
}
const person3 = {
    firstName : "Naimish",
    age : 21,
    about : personInfo
}

function personInfo(){
        console.log(`Person name is ${this.firstName} and age is ${this.age}.`);
        // console.log(this);
}

person1.about();
person2.about();
person3.about();
// this is an object which value is sets acording to the object passing to it


