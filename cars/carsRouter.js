// importing express
const express = require("express");

// using express to create a router
const router = express.Router();

// checking if router works
router.get('/', (req, res) =>{
    res.send('Hello from the router!')
});

// exporting the router
module.exports = router;