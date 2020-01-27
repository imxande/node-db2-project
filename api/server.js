// need to import express since I want to use it to create a server later on
const express = require('express');

// importing carsRouter here
const carsRouter = require('../cars/carsRouter.js');


// using express to create a server 
const server = express();

// teaching how to read json
server.use(express.json());

// // checking if server is working
// server.get('/', (req, res) =>{
//     res.send("Hello from the server!")
// })

// setting up end point here
server.use('/api/cars', carsRouter);

// exporting server
module.exports = server; 