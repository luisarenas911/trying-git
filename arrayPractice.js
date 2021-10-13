// arrayPractice.js

// importing our array of patients using `require`
const patients = require("./patients");

//console.log(patients);

// accesing elements in an array
const firstPatient = patients[0];

console.log(firstPatient);

// which element to access can also be dependent on a variable
const whichElementOfArray = 9;
const tenthPatient = patients[whichElementOfArray];
// const tenthPatient = patients[9];

console.log(tenthPatient);

// DIY

// - console.log the second patient from the array

console.log(patients[1])
// - console.log the last patient from the array
console.log(patients[patients.length-1])
console.log(patients[patients.length-2])
console.log(patients[patients.length-3])