const router = require('express').Router();

const getKindergarten = require('../controllers');

router.get('/', (req, res) => {
  res.json({ msg: 'Rawdaty is here' });
});

router.get('/kindergarten', getKindergarten);

module.exports = router;
