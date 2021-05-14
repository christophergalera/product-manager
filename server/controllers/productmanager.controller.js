const Productmanager = require ('../models/productmanager.model');

module.exports = { 
    // create a superhero document
    create: (req, res) => {
        console.log(req.body); //this will print the json object that we want to add to the DB
        Productmanager.create(req.body)
            .then((newProductmanager) => {
                console.log("In Create");
                res.json(newProductmanager);
            })
            .catch((err) => {
                console.log("Error within create");
                res.status(500).json(err);
            })
    },
}