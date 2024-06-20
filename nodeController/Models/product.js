const express  = require('express');
const router = express.Router();
const client = require('./database');



// View all products
router.get('/products', function(req,res){
    // Connect to the database
client
.connect()
.then(() => {
    console.log('Connected to PostgreSQL database');
    client.query('SELECT * FROM boots', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
        } else {
            res.send(result.rows);
            console.log('Query result:', result.rows);
        }

        // Close the connection when done
        client
            .end()
            .then(() => {
                console.log('Connection to PostgreSQL closed');
            })
            .catch((err) => {
                console.error('Error closing connection', err);
            });
    });
})
.catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
});
})



//View a product in database
router.get('/products/view', function(req,res){
    const product = req.query.name;
    //const {name, color} = req.query
     // Connect to the database
client
.connect()
.then(() => {
    console.log('Connected to PostgreSQL database');
    client.query(`SELECT * FROM boots WHERE BootsName = ${product}`, (err, result) => {
        if (err) {
            console.error('Error executing query', err);
        } else {
            res.send(result.rows);
            console.log('Query result:', result.rows);
        }
        // Close the connection when done
        client
            .end()
            .then(() => {
                console.log('Connection to PostgreSQL closed');
            })
            .catch((err) => {
                console.error('Error closing connection', err);
            });
    });
})
.catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
});
})
            

module.exports = router;