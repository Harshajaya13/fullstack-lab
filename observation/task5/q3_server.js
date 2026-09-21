// Express.js Student Server (Q3)

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies (if needed)
app.use(express.json());

// Sample data: List of 5 students
const students = [
    { id: 1, name: "Rahul Sharma", rollNo: "CS101", course: "Computer Science", grade: "A" },
    { id: 2, name: "Priya Patel", rollNo: "IT102", course: "Information Technology", grade: "A+" },
    { id: 3, name: "Amit Kumar", rollNo: "EC103", course: "Electronics", grade: "B+" },
    { id: 4, name: "Sneha Reddy", rollNo: "CS104", course: "Computer Science", grade: "A" },
    { id: 5, name: "Vikram Singh", rollNo: "ME105", course: "Mechanical Engg", grade: "B" }
];

// Route 1: Home Page ('/')
app.get('/', (req, res) => {
    res.send(`
        <h2>Welcome to Student Management Server</h2>
        <p>Available Routes:</p>
        <ul>
            <li><a href="/students">/students</a> - View list of all students</li>
            <li><a href="/about">/about</a> - Learn about this application</li>
        </ul>
    `);
});

// Route 2: Students List ('/students')
app.get('/students', (req, res) => {
    res.json({
        success: true,
        count: students.length,
        data: students
    });
});

// Route 3: About Page ('/about')
app.get('/about', (req, res) => {
    res.json({
        appName: "Student Management Express Server",
        version: "1.0.0",
        description: "A simple Express.js REST server for managing student details.",
        author: "Student (PBL Task 5)"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`- Home: http://localhost:${PORT}/`);
    console.log(`- Students: http://localhost:${PORT}/students`);
    console.log(`- About: http://localhost:${PORT}/about`);
});
