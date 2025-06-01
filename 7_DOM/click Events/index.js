// const firstButton = document.querySelectorAll(".my-buttons button");

// console.log(firstButton);


// for(let button of firstButton){
//     button.addEventListener("click" , function(){
//         console.log("You clicked");
//     })
// }


// // I want to textContent while clicking

// // using for of
// // for(let button of firstButton){
// //     button.addEventListener("click" , function(){
// //         console.log(this.textContent);
// //     })
// // }

// // // using for
// // for(let i=0; i<firstButton.length;i++){
// //     firstButton[i].addEventListener("click", function(){
// //         console.log(this.textContent);
// //     })
// // }


// // using forEach

// firstButton.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// })



// ==============================================================================================================================================================================


// // Event Object

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(){
//     console.log(this);
// })

// // Whenever i will add eventlistner in any element, browser 

// // When browser know that user performs the event which we have integrated in eventlister, browser will do 2 things
// // 1) gives callback function to js engine
// // 2) gives the information of the event performs with call back function
// // Information will be receive as a form of object 

// firstButton.addEventListener("click", (e)=>{
//     console.log(e.target.textContent);
// })


// ==============================================================================================================================================================================

// // Little Practice

// const allButtons = document.querySelectorAll(".my-buttons button");


// allButtons.forEach(button => {
//     button.addEventListener("click" , function(e){
//         e.target.style.backgroundColor = "yellow";
//         e.target.style.color = "#333";
//     })
// })

// Little Demo.html