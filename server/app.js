const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());   // for parsing application/json
app.use(express.urlencoded({ extended: true }));   // for parsing application/x-www-form-urlencoded

// const frontendBuildPath = path.join(__dirname, PATH);
// app.use(express.static(path.join(__dirname, "../client/build")));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

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

module.exports = app;