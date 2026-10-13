"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myName = "Jenna";
console.log(myName);
let age = 30;
console.log(age);
//functions
//functions declaration
// function greetUser(){
// }
//function expression
// const greetUser()=>{
// }
//function greetUser():string{
// console.log("good morning");
//return "good morning";
// }
//greetUser();
function greetUser() {
    let a = 2;
    let b = 3;
    console.log(a + b);
    return a + b;
}
greetUser();
function addNumbers(a, b) {
    console.log(a + b);
}
addNumbers(5, 6);
let users = [
    {
        firstName: "Jenna",
        lastName: "Smith",
        age: 30,
        role: "user"
    },
    {
        firstName: "John",
        lastName: "Doe",
        age: "mark",
        role: "admin"
    }
];
console.log(users);
//# sourceMappingURL=index.js.map