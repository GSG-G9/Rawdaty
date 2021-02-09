const router = require('express').Router();

const getUsers = require('./user');

router.use(getUsers);

module.exports = router;
