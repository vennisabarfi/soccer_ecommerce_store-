// Insert data from csv into schema
const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const file_path = `${process.cwd()}\\boots.json`;

  // Read and parse the JSON file
  const data = JSON.parse(fs.readFileSync(file_path, 'utf8'));
  console.log(data);

async function importJSON() {
  // Read and parse the JSON file
  const data = JSON.parse(fs.readFileSync(file_path, 'utf8'));
  console.log(data);

  for (const row of data) {
    try {
      await prisma.boots.create({
        data: {
          bootsName: row.bootsName,
          bootsMaterial: row.bootsMaterial,
          bootsBrand: row.bootsBrand,
          bootsType: row.bootsType,
          bootsPosition: row.bootsPosition,
          createdAt: new Date()  // Automatically sets createdAt to the current date and time
        },
      });
    } catch (error) {
      console.error(`Failed to insert ${row.email}:`, error);
    }
  }

  await prisma.$disconnect();
  console.log('JSON data imported successfully');
}

importJSON(); 

//run script with nodemon run index.js