# Project-Based Learning (PBL) - Task 6

This directory contains solutions and explanations for **Observation Task 6** (Questions 5 to 8).

---

## Question 5: JS Functions vs Classes (CO-1)

### Differences
| Feature | Functions | Classes (ES6) |
|---|---|---|
| **Definition** | Set of statements performing a task. | Blueprint for creating objects. |
| **Hoisting** | Function declarations are hoisted. | Classes are NOT hoisted. |
| **Instantiation** | Called directly: `add(5, 10)` | Instantiated using `new`: `new Student()` |
| **Syntax** | `function foo() {}` | `class Foo { constructor() {} }` |

### How Classes Create Objects
A class defines a `constructor()` function that runs when a new instance is created using `new ClassName()`. All instances share methods defined in the class body, conserving memory.

```javascript
class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    display() {
        console.log(`${this.name} (${this.rollNo})`);
    }
}
const s1 = new Student("Rahul", 101);
const s2 = new Student("Priya", 102);
```

---

## Question 6: Node.js Modules (`os`, `path`, `fs`) (CO-2)

### What are Node.js Modules?
Modules are self-contained, reusable blocks of JavaScript code in Node.js. Node.js has three types of modules:
1. **Core (Built-in) Modules:** Included with Node.js (`os`, `path`, `fs`, `http`).
2. **Local Modules:** Custom files created locally (`./myModule.js`).
3. **Third-Party Modules:** External packages installed via NPM (`express`).

### Built-in Modules Purpose & Examples
- **`os` Module:** Returns operating system details.
  ```javascript
  const os = require('os');
  console.log(os.platform(), os.arch(), os.freemem());
  ```
- **`path` Module:** Handles and transforms file paths cleanly across OS platforms.
  ```javascript
  const path = require('path');
  console.log(path.join(__dirname, 'file.txt'));
  ```
- **`fs` Module:** Performs file system operations (read, write, delete).
  ```javascript
  const fs = require('fs');
  fs.writeFileSync('test.txt', 'Hello World');
  ```

---

## Question 7: NPM & package.json (CO-2)

### What is NPM?
NPM (Node Package Manager) is the package manager for JavaScript. It provides a CLI tool to install external libraries and host open-source packages in its registry.

### What is package.json?
`package.json` is the manifest file at the root of a Node project. It records metadata, scripts, and dependencies (packages required by the project).

### Steps to Install and Use External Packages:
1. **Initialize NPM:** `npm init -y`
2. **Install Package:** `npm install express`
3. **Import in Code:** `const express = require('express');`
4. **Use Package:** Invoke imported methods/framework.

---

## Question 8: Express Middleware (CO-2)

### What is Express Middleware?
Middleware functions execute during the Request-Response cycle before reaching route handlers. They receive `req`, `res`, and `next`.

### Request-Response Cycle & Middleware
When a client sends a request:
1. Request enters server.
2. Passes through registered middleware functions in order.
3. Each middleware can inspect/modify `req` and `res`.
4. Middleware calls `next()` to pass control to the next function or ends cycle with `res.send()`.

### Custom Request Logger Middleware Example
```javascript
const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} -> ${req.url}`);
    next(); // Pass control to next route
};
app.use(requestLogger);
```

---

## How to Run Task 6 Files

```bash
# Run Question 6 (Modules Demo)
node q6_modules_demo.js

# Run Question 7 (NPM Demo)
node q7_npm_demo.js

# Run Question 8 (Express Logger Middleware)
npm install
node q8_middleware_server.js
```
Open `q5_functions_vs_classes.html` and `index.html` directly in your browser.
