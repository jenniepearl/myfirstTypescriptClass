import type {userInterface} from "./userinterface";
import type {Admin} from "./userinterface";


// let myName: string = "Jenna";

// console.log(myName);

// let age:number = 30;
// console.log(age);

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

// function greetUser():number{
    // let a=2;
    // let b=3;
    // console.log(a+b);
    // return a+b
    
// }

// greetUser();

// function addNumbers(a:number, b:number){
    // console.log(a+b);

// }
// addNumbers(5,6);


let users:userInterface[]=[
    {
        firstName:"Jenna",
        lastName:"Smith",
        age:30,
        role:"user"},
    {
        firstName:"John",
        lastName:"Doe",
        age:10,
        role:"admin"
    }
]


console.log(users)

let admin:Admin={
firstName:"Mark",
lastName:"Smith",
age:30,
role:"superAdmin",
adminType:"superAdmin",
adminLocation:"USA"
}


