const router = require('express').Router();

const { getUsers, logout, login } = require('../controllers');

router.get('/users', getUsers);
router.get('/logout', logout);
router.post('/login', login);

module.exports = router;
