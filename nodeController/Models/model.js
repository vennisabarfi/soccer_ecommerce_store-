const express = require('express');
const router = express.Router();
const { Client } = require('pg');
require('dotenv').config()
//  test if dotenv properly loaded
console.log(process.env.DATABASE);

const client = new Client({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
});

// Connect to PostgreSQL database
try {
    client
        .connect()
        .then(function(){
            console.log('Connected to PostgreSQL database');
        })
} catch (error) {
    console.log(`Error connecting to PostgreSQL database. Error: ${error}`);
    
}


// documentation: https://tembo.io/docs/getting-started/postgres_guides/connecting-to-postgres-with-nodejs 

module.exports = router;