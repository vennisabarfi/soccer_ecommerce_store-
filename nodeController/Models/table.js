
// Update table to convert recordid datatype to num or use serial key instead 


// Connect to PostgreSQL database
client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
    })
    .catch(error => {
        console.error(`Error connecting to PostgreSQL database. Error: ${error}`);
    });

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

