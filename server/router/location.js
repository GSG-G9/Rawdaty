const router = require('express').Router();

const { getLocations } = require('../controllers');
const { postLocations } = require('../controllers');

router.get('/locations', getLocations);
router.post('/locations', postLocations);

module.exports = router;
