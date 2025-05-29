// class


class CreateUser{
    constructor(firstName, lastName, email, age, address){
        console.log("Constructor ko bula liya gaya hai!!!");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about() {
        return `${this.firstName} is ${this.age} years old`
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "Me hoo ek udta robo Doreamon";
    }
}

const user1 = new CreateUser("Prashant", "Sarvaiya", "prashanthere90@gmail.com", 10, "Aus");
console.log(user1.firstName);
console.log(user1.sing());
console.log(user1.is18());
console.log(user1.about());