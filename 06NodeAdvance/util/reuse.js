//like a include program in abap where we can reuse the code
module.exports = {
    //Increase salary of employee by a certain percentage
    increaseSalary : function (employees, percentage){
        for(let i=0; i<employees.length; i++){
            employees[i].salary += employees[i].salary * (percentage / 100) ;
        }
    },

    //Syntax 2 for function = function is created as a variable
    increaseSalaryV2 : function(employees, percentage){
        for(let i=0; i<employees.length; i++){
            employees[i].salary += employees[i].salary * (percentage / 100) ;
        }
    },

    //Function to validate email id
    validateEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    //using function to perform string length
    getStringLength : function (str) {
        return str.length;
    },

    increaseSalaryV3 : (employees, percentage) => {
    var total = 0;
    for(let i=0; i<employees.length; i++){
        employees[i].salary += employees[i].salary * (percentage / 100);
        total += employees[i].salary;
    }
    console.log("Total salary after increase: " + total);
    console.log(`Total salary after increase: ${total}`);
    }

}