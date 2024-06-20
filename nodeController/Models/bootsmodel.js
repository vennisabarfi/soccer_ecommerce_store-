const express = require('express');
const router = express.Router();
const fs = require('fs');
const { Client } = require('pg');
require('dotenv').config()
//  test if dotenv properly loaded
console.log(process.env.DATABASE);

 
 
const dbConfig = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
};

const client = new Client(dbConfig);

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
// Link: https://tembo.io/docs/getting-started/postgres_guides/connecting-to-postgres-with-nodejs




// Soccer Boots Table
const createTable =`
CREATE TABLE boots(
RecordID VARCHAR PRIMARY KEY,
BootsName VARCHAR(255),
BootsMaterial VARCHAR(255),
BootsBrand VARCHAR(255),
BootsType VARCHAR(255),
BootsPosition VARCHAR(255)
);
 
`;
// Save to postgres
client.query(createTable, function(err,result){
    if(err){
        console.error(`Error creating table: ${err}`);
    } else{
        console.log('Table created successfully');
    }

    client.end();
});



// Insert data into table from csv into database
// Use pgadmin to import data from csv 


 module.exports = router;