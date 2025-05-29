// Getters and Setters

class person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullname(){
        return `${this.firstName} ${this.lastName}`
    }
   set fullname(fullname) {
        const [firstName, lastName] = fullname.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new person("PRashant", "Saravaiya", 19)


// If i want to use fullName as a property 
// console.log(person1.fullname);

console.log(person1.lastName);

// person1.setName("Mohit", "Kumar")

// Setting fullname
person1.fullname = "Raju Ramanath";

// Checking changes
console.log(person1.firstName); // Output: Raju
console.log(person1.lastName);  // Output: Ramanath
console.log(person1.fullname);  // Output: Raju Ramanath
