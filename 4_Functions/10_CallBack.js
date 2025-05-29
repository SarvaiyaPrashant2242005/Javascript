// // Call back function

// function myFunc1(callback){
//     callback();
// }

// function myFunc2(){
//     console.log("Inside func2");
// }

// myFunc1(myFunc2);






// Function Return a funtion

function myfunc(){
    function hello(){
        return "Hwllo World!!!"
    }
    return hello;
}

const ans = myfunc();
console.log(ans());
