
function sayHello(){
    console.log("Hello World!!!!!!!!");
}

// Function = function + object

// console.log(sayHello.name);

// name is a property by which we can get the function name

// We can add our own properties also

// sayHello.myownproperty = "very Unique Value";
// console.log(sayHello.myownproperty);


// Function gives us free space calls prototype

console.log(sayHello.prototype);  //{} 

// prototypes only provides by the functions

// const sayHello = {
//     key1: "Val1"
// }

// if(sayHello.prototype){
//     console.log("Prototype Hazeer hai !!!!!");
// }else{
//     console.log("nahi hai");
// }



// sayHello.prototype.abc = "A Bhai";
// sayHello.prototype.jkl = "Kese Ho";
// sayHello.prototype.xyz = "Sab Badhiya";

// console.log(sayHello.prototype);


// const userMethods = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years old`

//     },
//     is18: function () {
//         return this.age > 18;
//     }
// }




function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age,
    user.address = address
    return user;
} 

createUser.prototype.about =  function () {
    return `${this.firstName} is ${this.age} years old`
}
createUser.prototype.is18 = function() {
    return age > 18;
}
createUser.prototype.sing = function() {
    return "Zindagi sawar doo ek nayi bahar hoo (Doreamon)"
}

const user1 = createUser("Prashant", "Sarvaiya", "prashanthere90@gmail.com", 10, "Rajkot");
const user2 = createUser("Amrendra", "Bahubali", "bahubali@gmail.com",87, "Mahismate Samrajya");


console.log(user1);
console.log(user1.about());
console.log(user2.sing());