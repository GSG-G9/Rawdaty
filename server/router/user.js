const router = require('express').Router();

const { getUsers, login } = require('../controllers');

router.get('/users', getUsers);
router.get('/login', login);

module.exports = router;
