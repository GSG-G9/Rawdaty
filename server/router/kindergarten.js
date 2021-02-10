const router = require('express').Router();

const {
  kindergartenSearch,
  getSpecificKindergarten,
} = require('../controllers');

router.get('/kindergarten/:kindergartenId', getSpecificKindergarten);
router.get('/search', kindergartenSearch);

module.exports = router;
