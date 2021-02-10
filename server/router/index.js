const router = require('express').Router();
const kindergarten = require('./kindergarten');
const comment = require('./comment');

router.get('/', (req, res) => {
  res.json({ msg: 'Rawdaty is here' });
});

router.use(kindergarten);
router.use(comment);

module.exports = router;
