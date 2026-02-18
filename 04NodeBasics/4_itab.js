//create a employee internal table which contains data of many employees
var aEmployees = [
    {    
        "id": 1, 
         "name": "John Doe",
         "position": "Developer", 
         "smoker": false, 
         "age": 30, 
         "salary": 60000, 
         "sex": "M" 
    },
    {    
        "id": 2, 
         "name": "Jane Smith",
         "position": "Designer", 
         "smoker": true, 
         "age": 28, 
         "salary": 55000, 
         "sex": "F" 
    },
    {    
        "id": 3, 
         "name": "Sam Brown",
         "position": "Manager", 
         "smoker": false, 
         "age": 40, 
         "salary": 80000, 
         "sex": "M" 
    },
    {    
        "id": 4, 
         "name": "Lisa White",
         "position": "Tester", 
         "smoker": false, 
         "age": 25, 
         "salary": 50000, 
         "sex": "F" 
    }
]

//print the salary of Sam Brown
console.log(aEmployees[2].salary); // Output: 80000

//Using the loop
for (var i = 0; i < aEmployees.length; i++) {
    if(aEmployees[i].name === "Sam Brown") {
        console.log(aEmployees[i].salary); // Output: 80000
        aEmployees[i].starEmployee = true; // Add a new property
        //it will come out of the loop and not loop further employees once sam bown is found
        break;
    }
}

console.log(aEmployees); // Print the entire object of Sam Brown with new property

//Loop data using a function with built in function
aEmployees.forEach(
    //if aEmployee has 5 records, this function will be called 5 times
    //every time one record will be passed to this function
    function(spiderman){
        console.log(spiderman.name + " - " + spiderman.position);
    }
);
