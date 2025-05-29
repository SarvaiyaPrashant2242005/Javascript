// const user1 = {
//     firstName : "Prashant",
//     lastName : "Sarvaiya",
//     email : "prashanthere90@gmail.com",
//     age : 21,
//     address : "House Number, Colony, Pin Code",
//     about: function() {
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age > 18;
//     }
// }
// -----------------------------------------------------------------------------------------------------------------------------

// What if i want to make 1 million users
// That create the object and adds key value pairs and
// take inputs fn,ln,age etc and return everything


// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age,
//     user.address = address,

//     user.about = function(){
//                 return `${this.firstName} is ${this.age} years old`
//     }

//     user.is18 = function(){
//                 return this.age > 18;
//     }

//     return user;
// } 


// const user1 = createUser("Prashant", "Sarvaiya", "prashanthere90@gmail.com","19","Australia");
// // console.log(user1);
// // const mature = user1.is18();
// // console.log(mature);
// // const about = user1.about();
// // console.log(about);



// // Limitations : 
// const user2 = createUser("Raju", "Rastogi", "raju@gmail.com",10,"Inida");
// const user3 = createUser("Mahesh", "Mahipal", "Mahesh@gmail.com",90, "Gurgaon");
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // // Methods are creating everytime while user is creating which requires lots of memory

// const userMethods = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years old`

//     },
//     is18: function () {
//         return this.age > 18;

//     }
// }




// function createUser(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age,
//         user.address = address
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;    //It will just call that particular method
//     return user;
// } 

// ==========================================================================================================================================================
// What if i want to add too much methods in userMethod so i need to add in object and funciton both
// We can use __proto__for that

const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old`

    },
    is18: function () {
        return this.age > 18;
    }
}




function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age,
    user.address = address
    return user;
} 