const mongoose = require('mongoose');

const ProductmanagerSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: [true, "This is a required field."],
        // minlength: [3, ""]
    }, 
    //later on, we should make this an array of strings?
    price: {
        type: Number,
        // required: [true, "This is a required field."],
        // required: [true, ""]
    },
    description: {
        type: String, 
        // required: [true, "This is a required field."],
        // minlength: [5, ""]
    }
}, 
{timestamps:true});

//create the model using the name of my collection and the Schema
const Productmanager = mongoose.model("Productmanager", ProductmanagerSchema);
module.exports = Productmanager;
