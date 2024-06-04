const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const galleryFilePath = path.join(__dirname, '../../data/galleryList.json');

router.get('/', (req, res) => {
  const fileData = fs.readFileSync(galleryFilePath);
  const galleryList = JSON.parse(fileData).galleryList;
  res.json(galleryList);
});

module.exports = router;