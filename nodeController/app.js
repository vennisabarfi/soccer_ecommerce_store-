const express = require('express');
const app = express();
const PORT = 3000;
const user = require('./user');

app.use(user);

app.listen(PORT, function(req,res){
    try {
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.log(`Seems like the server is down! Error message: ${message}`);
    }
})