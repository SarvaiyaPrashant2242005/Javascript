// Function is a block of code which design to do a particular task

function sayHello(){
    console.log("Hello World!!!!");
}

sayHello();


function sum(num1, num2){
    return num1 + num2;
}

console.log(sum(4,90));
console.log(sum());


function sum2(num1,num2,num3){
    return num1+num2+num3;
}

console.log(sum2(4,5,9));




// Design a function which finds if number is even or odd

function isEven(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(5));
console.log(isEven(10));


// Design a function which finds particular element from an array

// Input array and target
// output index of that target

function findTarget(array, target){
    for(let i=0;i<array.length;i++){
        if(array[i]==target){
            return i;
        }
        
    }
    return -1;
}

const myArray = [1,23,4,5,2]
const target = 2;
console.log(findTarget(myArray, 2))