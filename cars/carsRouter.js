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

// getting car by id
router.get("/:id", (req, res) => {
    const { id } = req.params;
    // select * from cars where id = 2
    carsDB("cars")
        // .where({ id: id })
        .where("id", "=", id)
        .first()
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Failed to retrieve cars with specified ID" });
        });
});

// exporting the router
module.exports = router;