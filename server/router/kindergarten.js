const router = require('express').Router();

const {
  getKindergarten,
  getSpecificKindergarten,
  kindergartenSearch,
  addKindergarten,
} = require('../controllers');

router.get('/kindergarten', getKindergarten);
router.get('/kindergarten/:kindergartenId', getSpecificKindergarten);
router.get('/search', kindergartenSearch);
router.post('/kindergarten', addKindergarten);

module.exports = router;
