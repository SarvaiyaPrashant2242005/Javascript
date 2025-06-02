// Callback hell


// 1) Change helloworld to heading 1 after 1 second and after that's one second i want to change headin2
const h1 = document.querySelector(".heading1");
const h2 = document.querySelector(".heading2");
const h3 = document.querySelector(".heading3");
const h4 = document.querySelector(".heading4");
const h5 = document.querySelector(".heading5");
const h6 = document.querySelector(".heading6");
const h7 = document.querySelector(".heading7");

// setTimeout(() => {
//     h1.textContent = "one"
//     h1.style.color = "violet";

//     setTimeout(() => {
//         h2.textContent = "twp";
//         h2.style.color = "purple"

//         setTimeout(() => {
//             h3.textContent = "three";
//             h3.style.color = "red";

//             setTimeout(() => {
//                 h4.textContent = "four";
//                 h4.style.color = "pink";

//                 setTimeout(() => {
//                     h5.textContent = "five";
//                     h5.style.color = "green";

//                     setTimeout(() => {
//                         h6.textContent = "six";
//                         h6.style.color = "blue";

//                         setTimeout(() => {
//                             h7.textContent = "seven";
//                             h7.style.color = "brown"
//                         }, 3000)
//                     }, 2000)
//                 }, 2000)
//             }, 1000)
//         }, 2000)

//     }, 2000)
// }, 1000);




function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        } else {
            if (onFailureCallback) {
                onFailureCallback();
            }
        }
    }, time)
}


// CallBack HEll, Pyramid of DOOM

changeText(h1, "one", "red", 1000, () => {
    changeText(h2, "two", "red", 1000, () => {
        changeText(h3, "three", "red", 1000, () => {
            changeText(h4, "four", "red", 1000, () => {
                changeText(h5, "five", "red", 1000, () => {
                    changeText(h6, "six", "red", 1000, () => {
                        changeText(h7, "seven", "red", 1000, () => {

                        }, () => { console.log("Error Occured!!!!"); })
                    }, () => { console.log("Error Occured!!!!"); })
                }, () => { console.log("Error Occured!!!!"); })
            }, () => { console.log("Error Occured!!!!"); })
        }, () => { console.log("Error Occured!!!!"); })
    }, () => { console.log("Error Occured!!!!"); })
}, () => { console.log("Error Occured!!!!"); })