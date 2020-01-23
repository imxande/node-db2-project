// importing express
const express = require("express");

// importing knex
const knex = require("knex");

// knex configuration
const knexConfiguration = {
    client: "sqlite3",
    connection: {
        filename: "./data/cars.db3"
    },
    useNullAsDefault: true
};

// i need a connection to the data base
const carsDB = knex(knexConfiguration);

// using express to create a router
const router = express.Router();

// // checking if router works
// router.get('/', (req, res) =>{
//     res.send('Hello from the router!')
// });

// I need to get all cars here

router.get("/", (req, res) => {
    //    select  *   from  cars
    // db.select('*').from('cars').then().catch();
    carsDB("cars")
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve all the cars" });
        });
});


// exporting the router
module.exports = router;