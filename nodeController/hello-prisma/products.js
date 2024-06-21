const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');


const prisma = new PrismaClient();



router.get('/products/', async function main(req,res){
    //Queries here to boots table
    try {
        result = await prisma.boots.findMany();
    res.send(result);
    main()
    .then(async function(){
        await prisma.$disconnect()
    })
    .catch(async function(err){
        console.error(err)
        await prisma.$disconnect()
        process.exit(1)
    })
    } catch (error) {
        res.status(500).send(`Error sending GET request: ${error}`);
        console.log(`Error sending GET request: ${error}`);
    }
    } 
)


module.exports = router;