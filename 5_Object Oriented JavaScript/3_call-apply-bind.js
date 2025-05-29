// Call method
function about(hobby, favMusician){
        console.log(this.firstName, this.age, hobby, favMusician);
    }

const user1 = {
    firstName : "Prashant",
    age : 19,
}

const user2 = {
    firstName : "Rahul",
    age : 9,
   
}

// what if i want to use about method in object user2

about.call(user1, "Guitar" , "ZakirHussen")

// We can pass the object to the function for this keyword using call()


// Apply method
// We can pass argument in function using a simple array
about.apply(user2, ["Tabla" , "Jinku Maharaj"])


// Bind method

// It simply return a function 
const func = about.bind(user1, "Manjira" , "Koi nahi")

func();