const mongoose = requrie ('mongoose');
const db_name = 'product-manager';

mongoose.connect('mongodb://localhost/' + db_name, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to the " + db_name + "database"))
    .catch((err) => console.log("Error connecting to database!"))