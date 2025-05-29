// REST parameters

// What if i want to pass more then 3 parameters in function 

function myFunc(a,b,...c){
    console.log(`a = ${a}`);
    console.log(`b = ${b}`)
console.log(`c = ${c}`)


}
// 
// myFunc(1,2,3,8,12,3,4)


function addAll(...numbers){
    console.log(numbers);
    console.log(Array.isArray(numbers));
    total = 0
    for(let num of numbers){
        total = total  + num;
    }
    return total;
}

console.log(addAll(1,2,3,4,5))

