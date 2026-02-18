//Consume the reusable module 
const express = require('express');

//Create an instance of express application
const app = express();

//Define a handler to handle HTTP GET request
app.get('/', (req, res) => {
    res.send('Hello Welcome to Anubhav Trainings!');
});

//Serve static files from the 'webapp' directory - whole directory on internet
app.use(express.static('webapp'));

// app.get("/employee", (req, res) => {
//     const employee = {
//         id: 101,    
//         name: "John Doe",
//         position: "Software Engineer",
//         department: "IT"
//     };
//     res.json(employee);
// });

// app.get("/vendor", (req, res) => {
//     const vendor = {
//         id: 201,
//         name: "Acme Supplies",  
//         service: "Office Supplies",
//         contact: "+91-9876543210"
//     };
//     res.json(vendor);
// });


//Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} , Ctrl+C to stop`);
});