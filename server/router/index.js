const router = require('express').Router();
const kindergarten = require('./kindergarten');

router.get('/', (req, res) => {
  res.json({ msg: 'Rawdaty is here' });
});

router.use(kindergarten);

module.exports = router;
