var oEmp = {
    "empId": 1001,
    "empName": "Amisha Arora",
    "empSal": 50000,
    "empDept": "IT",
    "currency": "INR",
    "skills": ["JavaScript", "ABAP", "Workflow"],
    "address": {
        "street": "123, MG Road",
        "city": "Mumbai",   
        "state": "Maharashtra",
        "zip": "400001"
    }
}

console.log(oEmp); // Print the entire JSON object

// Accessing properties: in ABAP we do: wa-empName
console.log(oEmp.empName); // Output: 'Amisha Arora'
console.log(oEmp.skills[1]); // Output: 'ABAP' because index starts with 0
console.log(oEmp.address.city); // Output: 'Mumbai'

//convert JSON object to string
var sEmp = JSON.stringify(oEmp);
console.log(sEmp); // Output: JSON string
//Convert String back to json
var oEmp2 = JSON.parse(sEmp);
console.log(oEmp2); // Output: JSON object

//Looping each component(property) of JSON object
for(var prop in oEmp) {
    console.log(prop + ": " + oEmp[prop]);
    if(prop === "address") {
        //looping inner json object
        console.log("Address details: " + JSON.stringify(oEmp[prop]));
    }
}