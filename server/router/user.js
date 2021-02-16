const router = require('express').Router();
const { getUsers, logout, addUsers, login } = require('../controllers');

router.get('/users', getUsers);
router.get('/logout', logout);
router.post('/signup', addUsers);
router.post('/login', login);

module.exports = router;
