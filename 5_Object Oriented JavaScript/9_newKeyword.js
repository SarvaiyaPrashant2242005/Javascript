// new 
// 1.) empty object 'this' = {}
// 2.) return 'this;


function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}


const user1 = new createUser("Prashant", 10);
console.log(user1);
createUser("Himanshu", 19);