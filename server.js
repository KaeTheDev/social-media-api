const express = require('express');
require('dotenv').config();
const { MongoClient } = require('mongodb');

const app = express();

const PORT = process.env.PORT || 3001;

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

app.get('/', async (req, res) => {
    try {
        await client.connect();
        res.json({ message: "Successfully connected to the database!" });
    } catch(err) {
        res.status(500).json({ message: "Failed to connecte to the database." });
    }
});

