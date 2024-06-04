const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const manageFilePath = path.join(__dirname, '../../data/manageList.json');

router.get('/', async (req, res) => {
  const fileData = fs.readFileSync(manageFilePath);
  const list = JSON.parse(fileData);
  res.json(list.manageList);
});

router.post('/', (req, res) => {
  const fileData = fs.readFileSync(manageFilePath);

  const newData = req.body;
  
  const list = JSON.parse(fileData);
  
  list.manageList.push(newData);
  fs.writeFileSync(manageFilePath, JSON.stringify(list, null, 2));
  res.json(newData);  
});

module.exports = router;