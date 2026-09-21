// Express.js Middleware & Request Logger Server (Q8)

/*
===================================================================
WHAT IS EXPRESS MIDDLEWARE?
- Middleware functions are functions that execute during the Request-Response cycle.
- They have access to:
  1. req (Request object)
  2. res (Response object)
  3. next (Function to pass control to the next middleware)

HOW MIDDLEWARE WORKS IN THE REQUEST-RESPONSE CYCLE:
Client Request -> [Middleware 1] -> [Middleware 2 (Logger)] -> [Route Handler] -> Client Response
===================================================================
*/

const express = require('express');
const app = express();
const PORT = 3000;

// --------------------------------------------------
// CUSTOM MIDDLEWARE: Request Logger
// --------------------------------------------------
const requestLogger = (req, res, next) => {
    const timestamp = new Date().toLocaleTimeString();
    const method = req.method;
    const url = req.url;
    
    // Log incoming request details to terminal
    console.log(`[LOG ${timestamp}] HTTP ${method} -> ${url}`);

    // Call next() to pass execution to the next middleware or route handler
    next();
};

// Apply custom logger middleware globally to all routes
app.use(requestLogger);

// --------------------------------------------------
// ROUTES
// --------------------------------------------------

// Route 1: Home
app.get('/', (req, res) => {
    res.send(`
        <h2>Express Middleware Logger Server</h2>
        <p>Check your terminal console to see request log entries!</p>
        <ul>
            <li><a href="/about">/about</a></li>
            <li><a href="/data">/data</a></li>
        </ul>
    `);
});

// Route 2: About
app.get('/about', (req, res) => {
    res.json({
        title: "Express Middleware Demonstration",
        concept: "Custom Request Logger Middleware",
        author: "Student (PBL Task 6)"
    });
});

// Route 3: Sample Data
app.get('/data', (req, res) => {
    res.json({
        status: "success",
        message: "Request logged successfully by middleware!"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log("Logger middleware is active. Make requests to test output.\n");
});
