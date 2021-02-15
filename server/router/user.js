const router = require('express').Router();

const { getUsers, addUsers } = require('../controllers');

router.get('/users', getUsers);
router.post('/signup', addUsers);

module.exports = router;
