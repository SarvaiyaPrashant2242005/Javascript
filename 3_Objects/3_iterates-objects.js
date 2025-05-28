const student = {
    name : "Prashant",
    age : 19,
    enrollment : 92200133003,
    college : "MU",
    "student hobbies" : ["Cricket", "Coding"]  //Array inside object
}

// For in loop
for(let key in student){
    console.log(`${key} : ${student[key]}` );
}

// object keys
// It gives an array
console.log(Object.keys(student))


// For of
for (let key of Object.keys(student)){
    console.log(student[key]);
}