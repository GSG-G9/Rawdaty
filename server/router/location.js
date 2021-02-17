const router = require('express').Router();

const { getLocations } = require('../controllers');
const { postLocations } = require('../controllers');
const { verifyUser } = require('../middleware/authentication');

router.get('/locations', getLocations);
router.post('/locations', verifyUser, postLocations);

module.exports = router;
