const router = require('express').Router();
const {
  getUsers,
  logout,
  addUsers,
  login,
  getAuthUser,
} = require('../controllers');
const { verifyUser } = require('../middleware/authentication');

router.get('/users', getUsers);
router.get('/logout', logout);
router.post('/signup', addUsers);
router.post('/login', login);
router.get('/getAuthUser', verifyUser, getAuthUser);

module.exports = router;
