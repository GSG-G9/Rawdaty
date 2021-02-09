const router = require('express').Router();
// const auth = require('./auth');
const kindergarten = require('./kindergarten');

router.get('/', (req, res) => {
  res.json({ msg: 'Rawdaty is here' });
});

// router.use(auth);
router.use(kindergarten);

module.exports = router;
// router.get('kindergarten/:id', (req, res) => {});

module.exports = router;
