const express = require('express');
const router = express.Router();

const playersRoutes = require('./players/index');
const matchRoutes = require('./match/index');
const manageRoutes = require('./manage/index');
const communityRoutes = require('./community/index');
const galleryRoutes = require('./gallery/index');

router.use('/players', playersRoutes);
router.use('/matches', matchRoutes);
router.use('/manages', manageRoutes);
router.use('/community', communityRoutes);

module.exports = router;