// Object is a reference type datatype in javaScript

// Arrays are not sufficient for real world data
// Object stores key value pairs
// Object doesn't have any indexing


// How to create Objects
const person = {name : "Prashant Sarvaiya", age:27}; //also called object leteral
console.log(person);

const student = {
    name : "Prashant",
    age : 19,
    enrollment : 92200133003,
    college : "MU",
    hobbies : ["Cricket", "Coding"]  //Array inside object
}

// How to access data from objects
console.log(person.name);  //using dot notation
console.log(person.age);

console.log(student);

console.log(student["name"]); //using bracket notation



// How to add key value pair in object
person.gender = "Male"
console.log(person);
student["gender"] = "Male"
console.log(student);


