const obj1 = {
    key1 : "Value1",
    key2 : "Value2"
}

const obj2 = Object.create(obj1);

obj2.key3 = "value3"
console.log(obj2);

console.log(obj2.key1);


// __proto__ = [[prototype]] but prototype is different

console.log(obj2.__proto__);

// obj1 is a proto of obj2
