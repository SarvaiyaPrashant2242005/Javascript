// CallBacks in sychronous programming


// function MyFunc(callback){
//        console.log("Kuchh to ho raha he"); 
//         callback();
// }
// // What if i want to call another function after completing Myfunc();


// function MyFunc2(){
//     console.log("Ye dusra kuchh kr raha he!!!!");
// }

// MyFunc(MyFunc2);




// Example


function getInputNumbers(number1, number2, onSuccess, onFailure) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        console.log(number1, number2);
        onSuccess(number1, number2);
    }
    else {
        onFailure();
    }
}

getInputNumbers(1, 2, (num1, num2) => {
    console.log(num1 + num2);
}, () => {
    console.log("Wrong Datatype, Please pass numbers only");
})
