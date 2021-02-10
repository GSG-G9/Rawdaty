const router = require('express').Router();

const kindergartens = require('./kindergartens');

router.use(kindergartens);

module.exports = router;
