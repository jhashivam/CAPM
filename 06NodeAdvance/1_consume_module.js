//like in abap we consume a include program - INCLUDE prog.
const reuse = require('./util/reuse');

//array of employee objects
let employees = [
    { name: "John", salary: 50000, email: "john@example.com" },
    { name: "Jane", salary: 60000, email: "jane@example.com" },
    { name: "Doe", salary: 55000, email: "duo@example.com" },
    { name: "Leo", salary: 75000, email: "leo@example.com" }
];

reuse.increaseSalaryV3(employees, 10);

console.log("Employees after salary increase:");
console.log(employees);