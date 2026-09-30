// Express.js Middleware & Request Logger Server (Q8)

/*
Middleware: Functions that execute during the Request-Response cycle.
They have access to req (request), res (response), and next (next middleware).
Request-Response Cycle: Client Request -> Middleware Logger -> Route Handler -> Response
*/

const express = require('express');
const app = express();
const PORT = 3000;

// Custom Request Logger Middleware Function
const requestLogger = (req, res, next) => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[LOG ${timestamp}] HTTP ${req.method} -> ${req.url}`);
    
    // Pass control to next handler in request-response cycle
    next();
};

// Register logger middleware globally
app.use(requestLogger);

// Express Routes
app.get('/', (req, res) => {
    res.send('<h2>Express Logger Middleware Server</h2><p>Check terminal logs!</p>');
});

app.get('/about', (req, res) => {
    res.json({ message: "About page endpoint logged by middleware." });
});

// Start Express Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
