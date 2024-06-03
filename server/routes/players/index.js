const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const playersFilePath = path.join(__dirname, '../../data/playersList.json');

router.get('/', (req, res) => {
  const fileData = fs.readFileSync(playersFilePath);
  const playersList = JSON.parse(fileData).playersList;
  res.json(playersList);
});

module.exports = router;