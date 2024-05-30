const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());
app.use(express.json());   // for parsing application/json
app.use(express.urlencoded({ extended: true }));   // for parsing application/x-www-form-urlencoded

// 라우팅
const home = require("./routes/home");



// const frontendBuildPath = path.join(__dirname, PATH);
// app.use(express.static(path.join(__dirname, "../client/build")));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

const { playersList } = require('./data/playersList.json');
const { matchList } = require('./data/matchList.json');
const { manageList } = require('./data/manageList.json');
const { communityList } = require('./data/communityList.json');
const { galleryList } = require('./data/galleryList.json');

app.use("/", home);  // use -> 미들 웨어를 등록해주는 메서드.

app.get('/api/member', (req, res) => {
  res.json(playersList);
})

app.get('/api/match', (req, res) => {
  res.json(matchList);
})



const filePath = path.join(__dirname, 'data', 'manageList.json');
app.get('/api/manageList', async (req, res) => {
  const fileData = fs.readFileSync(filePath);
  const list = JSON.parse(fileData);
  res.json(list.manageList);
});

app.post('/api/manageList', (req, res) => {
  const newData = req.body;

  const fileData = fs.readFileSync(filePath);
  
  const list = JSON.parse(fileData);
  
  list.manageList.push(newData);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2));

  res.json(newData);  
});



app.get('/api/community', (req, res) => {
  res.json(communityList);
})

app.get('/api/galleryList', (req, res) => {
  res.json(galleryList);
})


app.get('/api/community/board/:id', (req, res) => {
  const {id} =  req.params;
  const board = communityList.find(item => item.id === parseInt(id));
  if(board) {
    res.json([board]);
  } else {
    res.status(404).json({message: 'Board not found'});
  }
})
module.exports = app;