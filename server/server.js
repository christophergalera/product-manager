const express = require('express');
const app = express ();
const cors = require ('cors');
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//mongoose config setup
require('./config/mongoose.config');

//routes setup
// import what was exported, and then invoke that function with app as the argument 
// to the returned/imported/required function
// require('./routes/productmanager.routes.js)(app);


//listner
app.listen(port, () => console.log("Server is running"));