const router = require('express').Router();

const {
  getKindergarten,
  getSpecificKindergarten,
  kindergartenSearch,
} = require('../controllers');
const { verifyUser, verifyAdmin } = require('../middleware/authentication');

router.get('/kindergarten', verifyUser, verifyAdmin, getKindergarten);
router.get('/kindergarten/:kindergartenId', getSpecificKindergarten);
router.get('/search', kindergartenSearch);

module.exports = router;
