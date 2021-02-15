const router = require('express').Router();

const { getUsers, logout } = require('../controllers');

router.get('/users', getUsers);
router.get('/logout', logout);

module.exports = router;
