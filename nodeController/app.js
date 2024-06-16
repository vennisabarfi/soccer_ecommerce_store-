const express = require('express');
const app = express();
const PORT = 3000;
const user = require('./user');
const model = require('./model');

app.use(user);

app.use(model);

app.listen(PORT, function(req,res){
    try {
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.log(`Seems like the server is down! Error message: ${message}`);
    }
})