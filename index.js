// Group-3 
// Foldername: Midterm Test 
// Student's Name: Pramod Regmi
// Student's ID: 200577094
// Date: 23 Feb 2024

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const tasksRoutes = require('./src/routes/routes.js');
const cors = require('cors');
const app = express();

// for postman connection for json data with the application
app.use(cors({}))
app.use(express.json());    

dotenv.config({ path: './config.env' });

// Initialize MongoDB Connection
const InitiateServer = require('./db');
InitiateServer();
const Task = require('./src/model/task.js');
// Read the data from books.json
const data = JSON.parse(fs.readFileSync('./tasks.json', 'utf-8'));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        importData();
    })
    .catch(error => console.error('Error connecting to MongoDB:', error));

// Function to Import Data from Json file to MongoDB Cluster using Mongoose Model..
const importData = async () => {
    try {
        // Check if the collection is empty
        const count = await Task.countDocuments();
        if (count === 0) {      
            await Task.create(data);
            console.log('Data successfully imported to MongoDB');
        } else {
            console.log('Data already exists in the database');
        }
    } catch (error) {
        console.log("Error importing the data", error);
    }
};

app.get('/', (req, res) => {
    res.send('Welcome to our webpage! This is our MidTerm Assignment 1!');
});

app.use('/tasks', tasksRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});