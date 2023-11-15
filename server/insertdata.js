const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

// Connection URL
const url = 'mongodb+srv://cherans21it:cheran2004@items.i0t0gcf.mongodb.net/?retryWrites=true&w=majority'; // Change this URL to your MongoDB server URL.

// Database Name
const dbName = 'ecommerce'; // Change to your database name.

// Full path to the JSON file
const jsonFilePath = 'C:/Users/chera/Downloads/mern-ecommerce-main/mern-ecommerce-main/server/itemsCollection.json';

// Read the JSON data from the file
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// Use the connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected successfully to the server');

  const db = client.db(dbName);

  // Insert the JSON data into a collection (e.g., 'myCollection')
  const collection = db.collection('myCollection'); // Change to your collection name.

  collection.insertMany(jsonData, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
    } else {
      console.log(`Inserted ${result.insertedCount} documents into the collection`);
    }

    // Close the connection
    client.close();
  });
});
