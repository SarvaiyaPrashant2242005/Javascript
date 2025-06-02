// Promises are used for values we don't have now but will get in the future

const bucket = ['coffee', 'tea', 'chips', 'salt', 'rice'];

// Create a Promise to make fried rice
const FriedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("fried Rice");
    } else {
        reject("Sorry, ingredients are not sufficient!!!!");
    }
});

// Consume the promise
FriedRicePromise.then((myFriedRice) => {
    console.log("Let's eat", myFriedRice);
})
.catch((error) => {
    console.log(error);
});
