const router = require('express').Router();
const { getUsers, logout, addUsers } = require('../controllers');

router.get('/users', getUsers);
router.get('/logout', logout);
router.post('/signup', addUsers);

module.exports = router;
