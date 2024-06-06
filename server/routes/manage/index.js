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

router.get('/amounts', async (req, res) => {
  try {
    const fileData = fs.readFileSync(manageFilePath);
    const list = JSON.parse(fileData);
  
    const monthlyAmounts = {};
    list.manageList.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const amount = parseFloat(item.amount) || 0;
  
      if(!monthlyAmounts[year]) {
        monthlyAmounts[year] = {};
      } 
      if(!monthlyAmounts[year][month]) {
        monthlyAmounts[year][month] = 0;
      }
      monthlyAmounts[year][month] += amount;
    });
    res.json(monthlyAmounts);
    console.log(monthlyAmounts)
    } catch(error) {
      console.error('Error while calculating monthly amounts:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
    
});

module.exports = router;