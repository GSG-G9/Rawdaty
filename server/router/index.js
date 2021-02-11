const router = require('express').Router();
const user = require('./user');
const kindergarten = require('./kindergarten');
const location = require('./location');
const comment = require('./comment');

router.use(kindergarten);
router.use(user);
router.use(location);
router.use(comment);

module.exports = router;
