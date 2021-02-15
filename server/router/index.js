const router = require('express').Router();
const user = require('./user');
const kindergarten = require('./kindergarten');
const location = require('./location');
const comments = require('./comments');

router.use(kindergarten);
router.use(user);
router.use(location);
router.use(comments);

module.exports = router;
