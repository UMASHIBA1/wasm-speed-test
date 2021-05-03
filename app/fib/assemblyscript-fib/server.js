const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/wasm", (req, res) => {
    res.set("Content-Type", "application/wasm");
    res.sendFile(__dirname + "/build/optimized.wasm");
})

app.get("/output.js", (req, res) => {
    res.sendFile( __dirname + "/dist/output.js");
})

const port = 3000;

app.listen(port, () => {
    console.log(`start server at http://localhost:${port}`);
}) 
