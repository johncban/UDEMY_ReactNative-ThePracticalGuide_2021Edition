//var - a function scoped variable declaration that is defined throughout the program
//let - a block variable declaration that is isolated to a specific function block (or bracket)
const firstname = 'Max'        //string, use const to make it static variable or it didn't change
//var 
let age = 29                   //number or integer
//var 
//let 
const hasHobbies = true        //boolean

//firstname = 'jc'
age = 30

//console.log(name)
/*
function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
    )
}
*/

const summarizeUser = (userName, userAge, userHasHobby) => { 
    // arrow function expression limitations: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    return (
        'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
    )
}

const add = (a, b) => a + b
const addOne = a => a + 1
const addRandom = () => 1 + 2 

console.log(summarizeUser(firstname, age, hasHobbies))
console.log(add(1, 2))
console.log(addOne(1))
console.log(addRandom())