const express = require('express');
const app = express();
const router = express.Router;
const PORT = 8000;

app.listen(PORT, function(req,res){
    try {
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.log(`Seems like the server is down! Error message: ${message}`);
    }
})