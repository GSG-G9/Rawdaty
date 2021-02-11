const router = require('express').Router();
const user = require('./user');
const kindergarten = require('./kindergarten');
const location = require('./location');

router.use(kindergarten);
router.use(user);
router.use(location);

module.exports = router;
