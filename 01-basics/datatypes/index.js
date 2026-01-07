// File: 01-basics/datatypes/index.js
// Topic: JavaScript Data Types
// Author: Praveena
// Module: DataTypes
// Purpose: Understand primitive and non-primitive data types with examples


// Primitive Data Types

// Number 
let age = 23;
console.log("Age:", age, "Type", typeof age);


// String
let userName = "Praveena";
console.log("User Name:", userName, "Type:", typeof userName);


// Boolean
let isDeveloper = true;
console.log("Is Developer:", isDeveloper, "Type:", typeof isDeveloper);

// Undefined
let city;
console.log("City:", city, "Type:", typeof city);

// Null (empty value)
let salary = null;
console.log("Salary:", salary, "Type:", typeof salary); // object - JS bug


// Symbol
let uniqueId = Symbol("id");
console.log("Unique ID:", uniqueId);

// BigInt
let largeNumber = 12345678901234567890n;
console.log("Large Number:", largeNumber, "Type:", typeof largeNumber);


// Non Primitive Data Types

let userProfile = {
    name: "Praveena",
    role: "Frontned Developer",
    experience: 1
};
console.log("User Profile:", userProfile);


// Array
let skills = ["HTML", "CSS", "JavaScript", "React"];
console.log("Skills:", skills);

function greetUser(name) {
    return `Hello, ${name}`;
}
console.log(greetUser("Praveena"));


