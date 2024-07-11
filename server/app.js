const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const fs = require('fs');
const userRoutes = require('./routes/index');

app.use(cors({
  origin: `http://localhost:3000`,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes)


module.exports = app;

/* build 파일 */
const frontendBuildPath = path.join(__dirname, '../client/build');
app.use(express.static(frontendBuildPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});