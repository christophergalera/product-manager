const Productmanager = require ('../models/productmanager.model');

module.exports = { 
    create: (req, res) => {
        console.log(req.body); //this will print the json object that we want to add to the DB
        Productmanager.create(req.body)
            .then((newProduct) => {
                console.log("In Create");
                res.json(newProduct);
            })
            .catch((err) => {
                console.log("Error within create");
                res.status(500).json(err);
            })
    },
    getAll: (req, res) => {
        Productmanager.find( { } )
        .then ((allProducts) => {
            console.log("In getAll");
            res.json(allProducts);
        })
        .catch((err) => {
            console.log("Error within getAll");
            res.status(500).json(err);
        })
    },
    getOne: (req, res) => {
        console.log("getOne ID: " + req.params.id);
        Productmanager.findById(req.params.id)
            .then((oneProduct) => {
                console.log("In getOne");
                res.json(oneProduct);
            }) 
            .catch((err) => {
                console.log("Error within getOne");
                res.status(500).json(err);
            })
    },
    update: (req, res) => {
        console.log(req.body); //this will print the json object that we want to add to the DB
        Productmanager.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
            runValidators: true, //validators do not work by default, need to set to True
        })
            .then((updatedProduct) => {
                console.log("In Update");
                res.json(updatedProduct);
            })
            .catch((err) => {
                console.log("Error within update");
                res.status(500).json(err);
            })
    },
    // delete superhero document
    delete: (req, res) => {
        console.log("delete ID: " + req.params.id);
        Productmanager.findByIdAndDelete(req.params.id)
            .then((deletedProduct) => {
                console.log("In delete");
                res.json(deletedProduct);
            }) 
            .catch((err) => {
                console.log("Error within delete");
                res.status(500).json(err);
            });
    }


}