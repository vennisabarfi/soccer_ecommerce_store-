const express  = require('express');
const router = express.Router();
const pool = require('./database');
// const {Buffer} = require('buffer')


// View all products
router.get('/products/', function(req,res){
    // Connect to the database
pool
.connect()
.then(() => {
    console.log('Connected to PostgreSQL database');
    pool.query('SELECT * FROM boots', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
        } else {
            res.send(result.rows);
            console.log('Query result:', result.rows);
        } 
 
        // // Close the connection when done
        // pool
        //     .end()
        //     .then(() => {
        //         console.log('Connection to PostgreSQL closed');
        //     })
        //     .catch((err) => {
        //         console.error('Error closing connection', err);
        //     });
    });
})
.catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
});
})

//View product by id (issue raised with recordid datatype)
router.get('/products/view/:id', function(req,res){
    const id = req.params.id;
 
     // Connect to the database
pool
.connect()
.then(() => {
    console.log('Connected to PostgreSQL database');
    pool.query(`SELECT * FROM boots WHERE recordid = ${id}`, (err, result) => {
        if (err) {
            console.error('Error executing query', err);
        } else {
            res.send(result.rows);
            console.log('Query result:', result.rows);
        }
        // // Close the connection when done
        // pool
        //     .end()
        //     .then(() => {
        //         console.log('Connection to PostgreSQL closed');
        //     })
        //     .catch((err) => {
        //         console.error('Error closing connection', err);
        //     });
    });
})
.catch((err) => { 
    console.error('Error connecting to PostgreSQL database', err);
});
})  

//   {
//     recordid: '1679742361-287',
//     bootsname: 'X Speedportal+',
//     bootsmaterial: 'Speedskin',
//     bootsbrand: 'adidas',
//     bootstype: 'Speed',
//     bootsposition: 'Attack'


//Filter products in database(by bootsname)
router.get('/products/view/', function(req,res){
    const bootsname = req.query.name;
     // Connect to the database
pool
.connect()
.then(() => {
    console.log('Connected to PostgreSQL database');
    pool.query(`SELECT * FROM boots WHERE bootsname = ${bootsname}`, (err, result) => {
        if (err) {
            console.error('Error executing query', err);
        } else {
            res.send(result.rows);
            console.log('Query result:', result.rows);
        }
        // Close the connection when done
        pool 
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

            
// //Filter products in database(by bootsposition)
// router.get('/products/view/', function(req,res){
//     const bootsposition = req.query.bootsPosition;
//      // Connect to the database
// pool 
// .connect() 
// .then(() => { 
//     console.log('Connected to PostgreSQL database');
//      // Using parameterized query to prevent SQL injection

//     pool.query(`SELECT * FROM boots WHERE bootsposition = ${bootsposition}`, (err, result) => {
//         if (err) {
//             console.error('Error executing query', err);
//         } else { 
//             res.send(result.rows);
//             console.log('Query result:', result.rows);
//         }
//         // Close the connection when done
//         pool
//             .end()
//             .then(() => {
//                 console.log('Connection to PostgreSQL closed');
//             })
//             .catch((err) => {
//                 console.error('Error closing connection', err);
//             });
//     });
// })
// .catch((err) => {
//     console.error('Error connecting to PostgreSQL database', err);
// });
// })

//Filter products in database(by bootstype)
router.get('/products/view/', function(req,res){
    const bootstype = req.query.bootType;
    //const {name, color} = req.query
     // Connect to the database
pool
.connect()  
.then(() => {
    console.log('Connected to PostgreSQL database');
    pool.query(`SELECT * FROM "boots" WHERE bootstype =${bootstype}`, (err, result) => {
        if (err) {
            console.error('Error executing query', err);
        } else { 
            res.send(result.rows);
            console.log('Query result:', result.rows);
        }
        // Close the connection when done 
        pool
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