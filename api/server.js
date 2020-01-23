// need to import express since I want to use it to create a server later on
const express = require('express');

// using express to create a server 
const server = express();

// teaching how to read json
server.use(express.json());

// checking if server is working
server.get('/', (req, res) =>{
    res.send("Hello from the server!")
})

module.exports = server; 