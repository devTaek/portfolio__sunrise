
const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());
server.use(express.json());   // for parsing application/json
server.use(express.urlencoded({ extended: true }));   // for parsing application/x-www-form-urlencoded

const { manageList } = require('./data/manageList.json');

server.get('/api/manageList', (req, res) => {
  // 플레이어 목록을 가져옵니다.
  // const manageInfo = manageList.map(manageList => {
  //   // 각 플레이어의 stats 프로퍼티 값을 JSON 문자열로 변환하여 반환합니다.
  //   return {
  //     ...manageList,
  //     stats: JSON.stringify(manageList)
  //   };
  // });

  // 수정된 플레이어 목록을 클라이언트에 응답합니다.
  res.json(manageList);
});
server.post('/api/manageList', (req, res) => {
  const newData = req.body;
  // 서버에서 새로운 데이터를 처리하고 필요에 따라 저장
  // 예: 데이터를 배열에 추가하여 저장
  manageList.push(newData);
  res.json(newData); // 클라이언트에 응답으로 새로 추가된 데이터를 다시 전송
});

server.listen(4000, () => {
  console.log('Server started on port 4000');
});

console.log(manageList);