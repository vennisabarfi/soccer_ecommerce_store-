const express = require('express');
const app = express();
const PORT = 3000;
const user = require('./user');
const products = require('./hello-prisma/products');



// Middleware to parse JSON bodies
app.use(express.json());

app.use(user);

app.use(products);

app.listen(PORT, function(req,res){
    try {
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.log(`Seems like the server is down! Error message: ${message}`);
    }
})