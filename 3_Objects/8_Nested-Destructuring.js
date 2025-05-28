const users = [
    {
        userId : 1,
        fn : "Prashant",
        Gen : "Male"
    },
    {
        userId : 2,
        fn : "Harsh",
        Gen : "Male"
    },
    {
        userId : 3,
        fn : "Nikita",
        Gen : "Female"
    }]


const [user1, user2,user3]  = users;
console.log(user1);
console.log(user2);
console.log(user3);

const [{fn, userId}, , {Gen}] = users;
console.log(fn);
console.log(userId);
console.log(Gen);