const router = require('express').Router();

const { getLocations } = require('../controllers');

router.get('/locations', getLocations);

module.exports = router;
