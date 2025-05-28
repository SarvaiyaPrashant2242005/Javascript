// Undefined and Null 


// When we declare any variable without assigning the value then the variable is undefined
let firstName;
console.log(firstName);

firstName = 10
console.log(typeof firstName);


// Null : 
let myNum = null
console.log(myNum);
console.log(typeof(null)); //Bug, error in JS

// BigInt

let Mynumber = 10;
console.log(Mynumber);
console.log(Number.MAX_SAFE_INTEGER); //We can store till this value in normal number integer

let Mynumbe = BigInt(123453212343212343212343223432134323)