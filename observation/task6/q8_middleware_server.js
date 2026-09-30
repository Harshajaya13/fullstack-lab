const express = require('express');
const app = express();

// Custom Logger Middleware
const logger = (req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
};

app.use(logger);

app.get('/', (req, res) => res.send('Home Page'));
app.get('/about', (req, res) => res.send('About Page'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
