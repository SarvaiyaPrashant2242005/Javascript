// Lexical Environment and Scope Chain

const lastName = "Sarvaiya"


const printName = function(){
    const firstName = "PRashant";
    function myfunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myfunction();
}

printName();



// Inside the myfunction

// checks if in lexical after its global and then upper layers

