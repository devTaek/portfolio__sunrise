const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');
const userRoutes = require('./routes/index');

dotenv.config();
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes)


module.exports = app;