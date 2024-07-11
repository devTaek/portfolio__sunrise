const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const db = require('../../config/db');

// notice
// GET (읽기)
router.get('/', (req, res) => {
  db.query("SELECT * FROM notice", (err, results, fields) => {
    if(!err) {
      res.send(results);
    } else {
      res.send(err);
    }
  })
});

// notice 
// id params GET 응답
router.get('/board/:id', (req, res) => {
  const {id} =  req.params;
  db.query("SELECT * FROM notice", [id] , (err, results, fields) => {
    if(!err && results.length > 0) {
      const foundBoard = results.find(board => board.notice_id === parseInt(id));
      if(foundBoard) {
        res.send(foundBoard);
      } else {
        console.error(err);
      }
    }
  }) 
})

// gallery
// GET (읽기)
router.get('/gallery', (req, res) => {
  db.query("SELECT * FROM gallery", (err, results, fields)=> {
    if(!err) {
      res.send(results);
    } else {
      console.error(err);
    }
  })
})

module.exports = router;