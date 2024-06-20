const express = require('express');
const app = express();
const PORT = 3000;
const user = require('./user');
const product = require('./Models/product');



// Middleware to parse JSON bodies
app.use(express.json());

app.use(user);

app.use(product);

app.listen(PORT, function(req,res){
    try {
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.log(`Seems like the server is down! Error message: ${message}`);
    }
})