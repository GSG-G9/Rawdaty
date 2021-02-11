const router = require('express').Router();
const user = require('./user');
const kindergarten = require('./kindergarten');

router.use(kindergarten);
router.use(user);

module.exports = router;
