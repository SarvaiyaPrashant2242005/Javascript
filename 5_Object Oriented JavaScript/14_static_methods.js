// static methods and properties

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return "This is a class named person"
    }
    get fullname(){
        return `${this.firstName} ${this.lastName}`
    }
   set fullname(fullname) {
        const [firstName, lastName] = fullname.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
     eat(){
        return `${this.firstName} is eating`
    }
    isSuperCute(){
        return this.age <=1;
    }
    isCute(){
        return this.age > 1;
    }
}


const person1 = new Person("Prashant", "Sarvaiya", 10);

console.log(person1.eat())

// person1.classInfo();

// static method is directly related to class not the object we can access directly using class name

const info = Person.classInfo();
console.log(info);