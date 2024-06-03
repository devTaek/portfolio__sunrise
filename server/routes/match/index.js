const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const matchFilePath = path.join(__dirname, '../../data/matchList.json');

router.get('/', (req, res) => {
  const fileData = fs.readFileSync(matchFilePath);
  const matchList = JSON.parse(fileData).matchList;
  res.json(matchList);
});

module.exports = router;