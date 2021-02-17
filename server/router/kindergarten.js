const router = require('express').Router();

const { verifyUser } = require('../middleware/authentication');
const {
  getKindergarten,
  getSpecificKindergarten,
  kindergartenSearch,
  deleteKindergarten,
} = require('../controllers');

router.get('/kindergarten', getKindergarten);
router.get('/kindergarten/:kindergartenId', getSpecificKindergarten);
router.get('/search', kindergartenSearch);
router.delete('/kindergarten/:kindergartenId', verifyUser, deleteKindergarten);

module.exports = router;
