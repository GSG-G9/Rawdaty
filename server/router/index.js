const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ msg: 'Rawdaty is here' });
});

module.exports = router;
