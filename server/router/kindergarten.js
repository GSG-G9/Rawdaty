const router = require('express').Router();

const { verifyUser } = require('../middleware/authentication');
const {
  getKindergarten,
  getSpecificKindergarten,
  kindergartenSearch,
  addKindergarten,
} = require('../controllers');

router.get('/kindergarten', getKindergarten);
router.get('/kindergarten/:kindergartenId', getSpecificKindergarten);
router.get('/search', kindergartenSearch);
router.post('/kindergarten', verifyUser, addKindergarten);

module.exports = router;
