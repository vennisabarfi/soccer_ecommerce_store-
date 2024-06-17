//Connect to PostgreSQL Database
const {Sequelize} = require('sequelize');
require('dotenv').config()
//  test if dotenv properly loaded
console.log(process.env.PASSWORD);

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    ssl: true,
})

// Test connection
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.log(error);
}
