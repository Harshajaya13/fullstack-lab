const express = require('express');
const app = express();

const students = [
    { id: 1, name: "Rahul", roll: 101 },
    { id: 2, name: "Priya", roll: 102 },
    { id: 3, name: "Amit", roll: 103 },
    { id: 4, name: "Sneha", roll: 104 },
    { id: 5, name: "Vikram", roll: 105 }
];

app.get('/', (req, res) => res.send('Welcome to Student Server'));
app.get('/students', (req, res) => res.json(students));
app.get('/about', (req, res) => res.send('Student Express Application'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
