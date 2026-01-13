const express = require('express');
require('dotenv').config();
const { MongoClient } = require('mongodb');

const app = express();

const PORT = process.env.PORT || 3001;