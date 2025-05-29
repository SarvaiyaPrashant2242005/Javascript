// Default params

function addTwo(a=0,b=0){
    return a+b;
}

const answer = addTwo(4)  //if do not pass all value then set as Not a Number (undefined)
console.log(addTwo(8,9));
console.log(answer);

