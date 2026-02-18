

//create a function to split the string by a delimiter
function splitSting(str, delimiter) {
    return str.split(delimiter);
}

//create a function to print salary of employee from array
function showMeRealSalary(employees, empName){
    for(let i=0; i<employees.length; i++){
        if(employees[i].name === empName){
            console.log(`${empName}'s salary is: ${employees[i].salary}`);
            return;
        }   
    }
}

//class variable in js
this.tax = 100;

//Increase salary of employee by a certain percentage
function increaseSalary(employees, percentage){
    for(let i=0; i<employees.length; i++){
        employees[i].salary += employees[i].salary * (percentage / 100) + this.tax;
    }
}

//Syntax 2 for function = function is created as a variable
var increaseSalaryV2 = function(employees, percentage){
    for(let i=0; i<employees.length; i++){
        employees[i].salary += employees[i].salary * (percentage / 100) + this.tax;
    }
}

//Function to validate email id
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//using function to perform string length
function getStringLength(str) {
    return str.length;
}

//Syntax 3 for function = arrow function - very important in modern JS/CAPM
//Note: arrow functions do not have their own 'this', they inherit 'this' from the parent scope
var increaseSalaryV3 = (employees, percentage) => {
    var total = 0;
    for(let i=0; i<employees.length; i++){
        employees[i].salary += employees[i].salary * (percentage / 100) + this.tax;
        total += employees[i].salary;
    }
    console.log("Total salary after increase: " + total);
    console.log(`Total salary after increase: ${total}`);
}

var employees = [
    {name: 'Alice Boston', salary: 50000},
    {name: 'Bob Robber', salary: 60000},
    {name: 'Charlie Chaplin', salary: 70000}
];

showMeRealSalary(employees, 'Bob Robber'); // Bob Robber's salary is: 60000
console.log("Before salary increase:");
console.log(employees);
increaseSalaryV3(employees, 10); // Increase all salaries by 10%
console.log("After salary increase:");
console.log(employees);

//map function - calculate the total salary of all employees
// a map function creates a new array by applying a function to each element of the original array
var salaries = employees.map(emp => emp.salary);
console.log("Salaries array: " + salaries);
//reduce function - calculate the sum of all salaries
salesTotal = salaries.reduce((total, salary) => total + salary, 0);
console.log("Total of all salaries: " + salesTotal);



