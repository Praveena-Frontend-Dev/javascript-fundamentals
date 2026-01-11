// File: 02-control-flow/control-flow/switchCase.js
// Topic: switch Statement
// Author: Praveena
// Module: Control Flow
// Purpose: Execute code based on fixed values

const selectedDay = "Monday";

switch (selectedDay) {
    case "Monday":
        console.log("Start of the work week");
        break;

    case "Friday":
        console.log("Almost weekend");
        break;

    case "Sunday":
        console.log("Holiday");
        break;

    default:
        console.log("Regular day");
}
