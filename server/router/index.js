const router = require('express').Router();
const kindergarten = require('./kindergarten');
const user = require('./user');
const location = require('./location');

router.use(user);
router.use(kindergarten);
router.use(location);

module.exports = router;
