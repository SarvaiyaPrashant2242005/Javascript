// Difference between dot and bracket notation

let key = "email" ;
const student = {
    name : "Prashant",
    age : 19,
    enrollment : 92200133003,
    college : "MU",
    "student hobbies" : ["Cricket", "Coding"]  //Array inside object
}

console.log(student["student hobbies"]);


// Add dynamic key into the object

student[key] = "prashanthere90@gmail.com"
console.log(student);