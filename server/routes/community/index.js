const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const communityFilePath = path.join(__dirname, '../../data/communityList.json');

router.get('/', (req, res) => {
  const fileData = fs.readFileSync(communityFilePath);
  const communityList = JSON.parse(fileData).communityList;
  res.json(communityList);
});

router.get('/board/:id', (req, res) => {
  const fileData = fs.readFileSync(communityFilePath);
  const communityList = JSON.parse(fileData).communityList;
  const {id} =  req.params;
  const board = communityList.find(item => item.id === parseInt(id));
  if(board) {
    res.json([board]);
  } else {
    res.status(404).json({message: 'Board not found'});
  }
})


module.exports = router;