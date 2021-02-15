const router = require('express').Router();

const {
  getKindergarten,
  getSpecificKindergarten,
  kindergartenSearch,
  deleteKindergarten,
} = require('../controllers');

router.get('/kindergarten', getKindergarten);
router.get('/kindergarten/:kindergartenId', getSpecificKindergarten);
router.get('/search', kindergartenSearch);
router.delete('/kindergarten/:kindergartenId', deleteKindergarten);

module.exports = router;
