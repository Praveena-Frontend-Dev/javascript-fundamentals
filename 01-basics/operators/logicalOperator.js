// File: 01-basics/operators/logicalOperator.js
// Topic: JavaScript Logical Operators
// Author: Praveena
// Module: Operators
// Purpose: Combine multiple conditions using logical operators

let baseValue = 10;
let secondValue = 5;
let thresholdValue = 8;

// Logical AND (&&)
const andConditionResult = baseValue > thresholdValue && secondValue < baseValue;
console.log("Logical AND (&&):", andConditionResult);

// Logical OR (||)
const orConditionResult = baseValue < thresholdValue || secondValue < baseValue;
console.log("Logical OR (||):", orConditionResult);

// Logical NOT (!)
const notConditionResult = !(baseValue === thresholdValue);
console.log("Logical NOT (!):", notConditionResult);
