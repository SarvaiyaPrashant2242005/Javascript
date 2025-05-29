// Function inside a function

const app = () => {
    const sayHello = () => {
        console.log("HEllo World!!!");
    }
    const sumofTwo = (n1,n2) => {
        return n1+n2;
    }

    const mulofTwo = (n1,n2) => {
        return n1*n2;
    }
    console.log("inside App");

    sayHello();
    console.log(sumofTwo(1,2));
    console.log(mulofTwo(7,8) );
}


app();