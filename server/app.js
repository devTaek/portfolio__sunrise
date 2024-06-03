const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const fs = require('fs');

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
const { galleryList } = require('./data/galleryList.json');



const playersRoutes = require('./routes/players');
const matchRoutes = require('./routes/match');
const communityRoutes = require('./routes/community');

app.use('/api/players', playersRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/community', communityRoutes)




const filePath = path.join(__dirname, 'data', 'manageList.json');
app.get('/api/manages', async (req, res) => {
  const fileData = fs.readFileSync(filePath);
  const list = JSON.parse(fileData);
  res.json(list.manageList);
});

app.post('/api/manages', (req, res) => {
  const newData = req.body;

  const fileData = fs.readFileSync(filePath);
  
  const list = JSON.parse(fileData);
  
  list.manageList.push(newData);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2));

  res.json(newData);  
});



// app.get('/api/community', (req, res) => {
//   res.json(communityList);
// })



// app.get('/api/community/board/:id', (req, res) => {
//   const {id} =  req.params;
//   const board = communityList.find(item => item.id === parseInt(id));
//   if(board) {
//     res.json([board]);
//   } else {
//     res.status(404).json({message: 'Board not found'});
//   }
// })


app.get('/api/gallery', (req, res) => {
  res.json(galleryList);
})

module.exports = app;

