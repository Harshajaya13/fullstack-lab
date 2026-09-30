// Express.js Student Server (Q3)
const express = require('express');
const app = express();
const PORT = 3000;

// List of at least 5 student details
const students = [
    { id: 1, name: "Rahul Sharma", rollNo: 101, course: "CSE" },
    { id: 2, name: "Priya Patel", rollNo: 102, course: "IT" },
    { id: 3, name: "Amit Kumar", rollNo: 103, course: "ECE" },
    { id: 4, name: "Sneha Reddy", rollNo: 104, course: "CSE" },
    { id: 5, name: "Vikram Singh", rollNo: 105, course: "ME" }
];

// Route 1: Home Endpoint ('/')
app.get('/', (req, res) => {
    res.send('<h2>Student Management Server</h2><p>Routes: /students, /about</p>');
});

// Route 2: Students List Endpoint ('/students')
app.get('/students', (req, res) => {
    res.json({ success: true, data: students });
});

// Route 3: Application Info Endpoint ('/about')
app.get('/about', (req, res) => {
    res.json({ appName: "Student Server App", version: "1.0.0" });
});

// Start Express Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
