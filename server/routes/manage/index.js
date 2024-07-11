const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const manageFilePath = path.join(__dirname, '../../data/manageList.json');

// manageList 데이터
router.get('/', async (req, res) => {
  const fileData = fs.readFileSync(manageFilePath);
  const list = JSON.parse(fileData);
  res.json(list.manageList);
});

// manageList 데이터 등록
router.post('/', (req, res) => {
  const fileData = fs.readFileSync(manageFilePath);

  const newData = req.body;
  
  // 지출일 경우, 음수변환
  // if (['구장', '음료', '장비'].includes(newData.type)) {
  //   newData.amount = -Math.abs(parseFloat(newData.amount));
  // } else {
  //   newData.amount = parseFloat(newData.amount);
  // }

  const list = JSON.parse(fileData);
  
  list.manageList.push(newData);
  fs.writeFileSync(manageFilePath, JSON.stringify(list, null, 2));
  res.json(newData);  
});


// 월별 총액 리스트 API
router.get('/amounts', async (req, res) => {
  try {
    const fileData = await fs.readFileSync(manageFilePath, 'utf-8');
    const list = JSON.parse(fileData);

    let monthlyAmountsList = {}; // 각 월의 수익과 지출을 담을 객체

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


/* const monthlyTransactions = {}; // 각 월별 트랜잭션을 담을 객체 생성
    let carriedAmount = 0; // 초기값 1000000

    // 월별 트랜잭션을 수집하는 루프
    list.manageList.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1 필요

      const key = `${year}-${month}`;

      if (!monthlyTransactions[key]) {
        monthlyTransactions[key] = 0;
      }

      const amount = parseFloat(item.amount);
      monthlyTransactions[key] += amount;
    });

    // 월별 합계를 기반으로 누적 합계 구하기
    const monthlyAmounts = {};
    let prevAmount = carriedAmount;

    // 키를 정렬된 순서로 처리
    Object.keys(monthlyTransactions).sort().forEach(key => {
      const currentMonthTotal = monthlyTransactions[key];
      const currentAmount = prevAmount + currentMonthTotal;
      monthlyAmounts[key] = currentAmount;
      prevAmount = currentAmount;
    });

    res.json(monthlyAmounts); */