// // Every elements are in the document object

// // How i can access or select any one document
// // 1) using getelementbyid : Access only for IDs
// const mainHeading = document.getElementById("main-heading")

// ===============================================================================================================================

// // 2) using query selector : Access for all

// const header = document.querySelector("#main-heading");   //using id
// const heading = document.querySelector(".headline");       //using class
// const nav = document.querySelectorAll(".nav-item");        // For all the elements of classes
// document.querySelector("div.headline h2")    gives div of headline class and h2 tag
// ===============================================================================================================================

// Change the texts

// // I want to select manage your task to Hello World!!!

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);   //Gives the text written in that id

// // mainHeading.textContent = "Hello world!!!"
// // console.log(mainHeading.textContent);



// console.log(mainHeading.innerText);   //innerText just gives the text written publically not in display:none or hidables


// ===============================================================================================================================

// // What if i want to change the color
// // we can change the style of elements using style 

// mainHeading.style.color = "green";
// mainHeading.style.backgroundColor = "yellow"
// mainHeading.style.border = "5px solid red"

// ===============================================================================================================================

// // get and set attributes

// const link = document.querySelector("a")  //give first anchor tag
// console.log(link);

// link.getAttribute("href")  //to get the attribute of that element
// link.setAttribute("href",  "https://google.com"); 

// const inputElement = document.querySelector(".form-todo input")
// console.log(inputElement);

// ===============================================================================================================================


// // How to get multiple items by classname

// const allNavs = document.getElementsByClassName("nav-item") //give html Collection
// const navItems = document.querySelectorAll(".nav-item")     // gives nodeLists
// console.log(allNavs);
// console.log(navItems[1]);
// console.log(allNavs[0]);
// ===============================================================================================================================



// // LOOPs

// // We can'tuse ForEach to iterate html collection
// // array like object ----------> can use indexing and have length properties

// const allNavs = document.getElementsByClassName("nav-item") 

// for(let i=0;i<allNavs.length;i++){
//     console.log(allNavs[i ]);
// }


// ===============================================================================================================================

// // I want to change the background color to white and text color green

// const allNavs = document.getElementsByTagName("a") 
// for(let i=0;i<allNavs.length;i++){
//     const navItem = allNavs[i];
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold"
// }

// Array.from(allNavs) //to convert into the array


// ===============================================================================================================================


// let navItems = document.querySelectorAll("a");
// console.log(navItems);

// We can use for , for of and forEach 

// ===============================================================================================================================

// InnerHTML

// const headline = document.querySelector(".headline");
// console.log(headline);
 
// headline.innerHTML = "<h1>Prashant Sarvaiya</h1>"
// headline.innerHTML += "<button class=\"btn\"> click</button>"


// ===============================================================================================================================

// const selectTodo = document.querySelector(".section-todo");
// console.log(selectTodo);

// selectTodo.classList.add('bg-dark')                             //Add class 
// const ans = selectTodo.classList.contains('container')          //check if class exist
// console.log(ans);

// selectTodo.classList.toggle('bg-dark')
// selectTodo.classList.toggle('bg-dark')

// ===============================================================================================================================

// // Create HTML tags and make styles

// const Todo = document.querySelector(".todo-list");

// Todo.innerHTML+="<li> new Todo </li>"
// Todo.innerHTML+="<li> Jai Hind </li>"


// // when to use and when not to use

// // We do not use because it couse performance issue
// // Only use when Too much HTML is there and want to change existing one (Not uodate)

// ===============================================================================================================================

// //Create new elements

// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach Student")


// newTodoItem.prepend(newTodoItemText);
// console.log(newTodoItem);


// const Todo = document.querySelector(".todo-list");

// Todo.prepend(newTodoItem); 

// ===============================================================================================================================

// clone any node

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");

// li.textContent = "New TODO";
// ul.append(li);
// //  what ifi want append and prepend both

// const li2 = li.cloneNode(true);
// ul.prepend(li2)


// ===============================================================================================================================

// static list vs live list


// // static list
// const listItems = document.querySelectorAll(".todo-list li")

// const newLI = document.createElement("li");
// newLI.textContent = "TODO";

// const ul = document.querySelector(".todo-list");
// ul.append(newLI)
// console.log(listItems);

// queryselector gives static lists
// getElements gives live list

// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");

// console.log(listItems);

// ===============================================================================================================================

// // How to get Dimentions of elements

// // Dimentions like height and width

// const section = document.querySelector(".section-todo")
// const info =  section.getBoundingClientRect();
// console.log(info);


// ===============================================================================================================================


// Events : Actions need to perform on HTML elements: input events, mouse event and keyboard event

// Mouse Evenet : Used to notify when mouse is clicked on element
// click event , context menu

// What if i want to do something onclick of learn more button  in html page
// How to add event : 
    // 1)Directly in html using onclick = "console.log("CLICKED")" like this (Not used majorly)
    // 2) select that button and add event

// const btn = document.querySelector(".btn-headline");
// // console.dir(btn);

// // btn.onlick = function(){
// //     console.log("MUJE KYU TODA!!!");
// // }

// // 3) using addeventlistner 

// // function clickMe(){
// //     console.log("Muje touch kiya!!!!");
// // }
// btn.addEventListener("click",function(){
//     console.log("U licked me");
// });



// ===============================================================================================================================



// // this keyword

// const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click", function() {
//     console.log("Clicked");
//     console.log("Value of this : ");     //in the case of function() keyword this value if btn element it self
//     console.log(this);                  //in the case of arrow function this value is window object
// })

// move to clickevent folder
// ===============================================================================================================================


// // keyPress Event and mouseover event

// // I want to know keyword button pressed in the body

// const body = document.body;

// body.addEventListener("keypress", (e) => {
//     console.log(e.key);
// })



// // when i take notify when a user take mouse over a button

// const mainButton = document.querySelector(".btn-headline");

// mainButton.addEventListener("mouseover" , (e) => {
//     console.log("Mouse overed");
// })

// mainButton.addEventListener("mouseleave" , (e) => {
//     console.log("Mouse leaved");
// })



// Event Bubbling
// ===============================================================================================================================


// Making Todo dynamic

const todoForm = document.querySelector(".form-todo");
const textInput = document.getElementById("todoId");
const todoList = document.querySelector(".todo-list")

todoForm.addEventListener("submit" ,(e) => {
    e.preventDefault();
        console.log("Form Submitted");
        const newTodoText = textInput.value;

        const newli = document.createElement("li");

const newliInnerHTML = `
    <span class='text'>${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
`;

newli.innerHTML = newliInnerHTML;
todoList.append(newli)
        textInput.value = ""


});

todoList.addEventListener("click" , (e) => {
    // console.log(e.target);

    // Check if user click done button
    if (e.target.classList.contains("done")){
        console.log("Greate");

        const liSpan = e.target.parentNode.previousElementSibling;
        console.log(liSpan);
        liSpan.style.textDecoration = "line-through"
    }
    if (e.target.classList.contains("remove")){
        console.log("You wanna remove something?");

        const targettedLI = e.target.parentNode.parentNode;
        console.log(targettedLI);
        targettedLI.remove();
    }
})


