// Super keyword

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age <=1;
    }
    isCute(){
        return this.age > 1;
    }
}

class Dog extends Animal {
    constructor(name, age, speed){
        super(name, age);                                 //can use name and age from parent class
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at speed of ${this.speed}kmph`
    }
}

const tommy = new Dog("tommy", 3, 190)
console.log(tommy.run());
