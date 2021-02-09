const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ msg: 'Rawdaty is here' });
});

// router.get('kindergarten/:id', (req, res) => {});

module.exports = router;
