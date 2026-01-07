// File: 01-basics/operators/comparisonOperator.js
// Topic: JavaScript Comparison Operators
// Author: Praveena
// Module: Operators
// Purpose: Compare values and return boolean results

let baseValue = 10;
let secondValue = 3;
let stringValue = "10";

// Equal to (==)
const isEqual = baseValue == stringValue;
console.log("Equal to (==):", isEqual);

// Strict Equal to (===)
const isStrictEqual = baseValue === stringValue;
console.log("Strict Equal to (===):", isStrictEqual);

// Not Equal to (!=)
const isNotEqual = baseValue != secondValue;
console.log("Not Equal to (!=):", isNotEqual);

// Strict Not Equal to (!==)
const isStrictNotEqual = baseValue !== stringValue;
console.log("Strict Not Equal to (!==):", isStrictNotEqual);

// Greater Than (>)
const isGreaterThan = baseValue > secondValue;
console.log("Greater Than (>):", isGreaterThan);

// Less Than (<)
const isLessThan = baseValue < secondValue;
console.log("Less Than (<):", isLessThan);

// Greater Than or Equal To (>=)
const isGreaterThanOrEqual = baseValue >= 10;
console.log("Greater Than or Equal To (>=):", isGreaterThanOrEqual);

// Less Than or Equal To (<=)
const isLessThanOrEqual = secondValue <= 3;
console.log("Less Than or Equal To (<=):", isLessThanOrEqual);
