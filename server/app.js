const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors({
  origin: `http://localhost:3000`,
  credentials: true,
}));
app.use(express.json());   // for parsing application/json
app.use(express.urlencoded({ extended: true }));   // for parsing application/x-www-form-urlencoded

const playersRoutes = require('./routes/players');
const matchRoutes = require('./routes/match');
const manageRoutes = require('./routes/manage');
const communityRoutes = require('./routes/community');
const galleryRoutes = require('./routes/gallery');

app.use('/api/players', playersRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/manages', manageRoutes);
app.use('/api/community', communityRoutes);

// community의 sub
app.use('/api/gallery', galleryRoutes);


module.exports = app;

/* build 파일 */
// const frontendBuildPath = path.join(__dirname, PATH);
// app.use(express.static(path.join(__dirname, "../client/build")));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });