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
    const fileData = await fs.readFileSync(manageFilePath, 'utf-8');
    const list = JSON.parse(fileData);

    let monthlyAmountsList = {};

    for (let i = 0; i < list.manageList.length; i++) {
      const item = list.manageList[i];
      const itemMonth = new Date(item.date).getMonth() + 1;
      const amount = parseInt(item.amount) || 0;

      const monthKey = itemMonth + '월';

      if (!monthlyAmountsList[monthKey]) {
        monthlyAmountsList[monthKey] = amount;
      } else {
        monthlyAmountsList[monthKey] += amount;
      }
    }

    res.json(monthlyAmountsList);
  } catch (error) {
    console.error('월별 총액 계산 중 오류 발생:', error);
    res.status(500).json({ error: '내부 서버 오류' });
  }
});


module.exports = router;