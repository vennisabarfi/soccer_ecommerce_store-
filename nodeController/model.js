const express = require('express');
const router = express.Router();
const { Client } = require('pg');
require('dotenv').config()
console.log(process.env.DATABASE);

const client = new Client({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
});



module.exports = router;