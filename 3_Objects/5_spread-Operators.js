// // Spread

// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const newArray =[... array1, ...array2, 89, 19];

// const a1 = [... "abc"]
// console.log(newArray);
// console.log(a1);


// In object

const obj1 = {
    key1 :  "value1",
    key2 : "value2",
    key3 : "value3",
}

const obj2 = {
    key5 :  "value5",
    key6 : "value6",
    key7 : "value7",
}

const newobj = {...obj1, ...obj2};
console.log(newobj);
console.log(obj1);


const obj3 = {...obj1, ...obj2, key89 : "value89"};
console.log(obj3);


const alphabets = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(alphabets);