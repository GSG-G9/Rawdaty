const router = require('express').Router();
const kindergarten = require('./kindergarten');

router.use(kindergarten);

module.exports = router;
