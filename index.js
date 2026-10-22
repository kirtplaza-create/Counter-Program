// variable = A container that stores a value.
// behaves as if it were the value it contains.

// 1. declaration   let x;
// 2. assignment    x = 100;

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// let firstName = "Bro";
// let favoriteFood = "Pizza";
// let email = "bro@gmail.com";

// let online = false;
// let forSale = true;
// let isStudent = true;

// console.log(`Bro is online: ${online}`);
// console.log(`This car is for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);

// let fullName = "Kirt Plaza";
// let age = 21;
// let isStudent = true;

// document.getElementById("p1").textContent = `Your name ${fullName}`;
// document.getElementById("p2").textContent = `Your age is ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// arithmetic operators = operans (values, variables, etc.)
//                        operations (+, -, *, /, %)
//                        ex. 11 = x + 5;

// let students = 31;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// let extraStudents = students % 3;
// students += 3;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;
// students++;
// students--;
/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/
// let result = 1 + 2 * 3 + 4 ** 2;

// how to accept user input
// 1. easy way = window prompt
// 2. professional way = HTML textbox

// let username;
// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }

// type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

// let age = window.prompt("How old are you?");
// age = Number(age);
// age += 1;

// console.log(age, typeof age);

// let x = "0";    
// let y = "0";   
// let z = "0";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof x);
// console.log(z, typeof z);

// const = a variable that can't be changed.
// const pi = 3.14159;
// let radius;
// let circumference;

// document.getElementById("mySubmit").onclick = function() {
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * pi * radius;
//     document.getElementById("myH3").textContent = circumference + "cm";
// }

// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}