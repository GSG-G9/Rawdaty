const router = require('express').Router();
const kindergarten = require('./kindergarten');
const user = require('./user');
const locations = require('./location');

router.use(user);
router.use(kindergarten);
router.use(locations);

module.exports = router;
