
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

const corsOptions = {
	origin: 'http://15.164.204.237:5000'
};
// const PATH = '../client/build';

app.set("port", process.env.PORT || 5000);

app.use(cors(corsOptions));
app.use(express.json());   // for parsing application/json
app.use(express.urlencoded({ extended: true }));   // for parsing application/x-www-form-urlencoded

// const frontendBuildPath = path.join(__dirname, PATH);
app.use(express.static(path.join(__dirname, "../client/build")));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const { playersList } = require('./data/playersList.json');
const { matchList } = require('./data/matchList.json');
const { manageList } = require('./data/manageList.json');
const { communityList } = require('./data/communityList.json');


app.get('/api/member', (req, res) => {
  res.json(playersList);
})

app.get('/api/match', (req, res) => {
  res.json(matchList);
})


app.get('/api/manageList', (req, res) => {

  // 수정된 플레이어 목록을 클라이언트에 응답합니다.
  res.json(manageList);
});
app.post('/api/manageList', (req, res) => {
  const newData = req.body;
  manageList.push(newData);
  res.json(newData); // 클라이언트에 응답으로 새로 추가된 데이터를 다시 전송
});

app.get('/api/community', (req, res) => {
  res.json(communityList);
})

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중..");
});
module.exports = app;