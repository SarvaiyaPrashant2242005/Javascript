// Object inside an array is very useful while solving real word problems

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


for(let user of users){
    console.log(user)
}