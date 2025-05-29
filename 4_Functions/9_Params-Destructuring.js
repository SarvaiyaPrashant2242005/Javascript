const person = {
    fn : "Prashant",
    gender : "Male",
    age:19
}

function printFn(obj){
    console.log(obj.fn);
    console.log(obj.gender);
}

function printDetails({fn,age,gender}){
    console.log(fn);
    console.log(gender);
    console.log(age);
}

printDetails(person)