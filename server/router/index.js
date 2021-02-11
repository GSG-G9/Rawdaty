const router = require('express').Router();
const kindergarten = require('./kindergarten');
const user = require('./user');

router.use(user);
router.use(kindergarten);

module.exports = router;
