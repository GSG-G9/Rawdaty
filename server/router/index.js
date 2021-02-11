const router = require('express').Router();
const kindergarten = require('./kindergarten');
const comments = require('./comments');

router.get('/', (req, res) => {
  res.json({ msg: 'Rawdaty is here' });
});

router.use(kindergarten);
router.use(comments);

module.exports = router;
