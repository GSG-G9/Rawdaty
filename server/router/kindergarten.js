const router = require('express').Router();

const {
  getKindergarten,
  getSpecificKindergarten,
  kindergartenSearch,
} = require('../controllers');

router.get('/kindergarten', getKindergarten);
router.get('/kindergarten/:kindergartenId', getSpecificKindergarten);
router.get('/search', kindergartenSearch);

module.exports = router;
