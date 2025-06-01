const grandParent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Event Bubbling : If the eventListner is on child and parent as well when we perform on child then parents event will automatically occured

child.addEventListener("click", (e) => {
    console.log("Child is clicked");
})

parent.addEventListener("click", (e) => {
    console.log("Parent is clicked");
})

grandParent.addEventListener("click", (e) => {
    console.log("GrandParent");
})