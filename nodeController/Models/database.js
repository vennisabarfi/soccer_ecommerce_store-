
const express = require('express');
const fs = require('fs');
const {Pool} = require('pg'); 

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

const pool = new Pool(dbConfig);



module.exports = pool;
 