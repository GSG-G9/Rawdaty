const router = require('express').Router();

const { verifyUser } = require('../middleware/authentication');
const {
  getKindergarten,
  getSpecificKindergarten,
  kindergartenSearch,
  addKindergarten,
  deleteKindergarten,
} = require('../controllers');

router.get('/kindergarten', getKindergarten);
router.get('/kindergarten/:kindergartenId', getSpecificKindergarten);
router.get('/search', kindergartenSearch);
router.post('/kindergarten', verifyUser, addKindergarten);
router.delete('/kindergarten/:kindergartenId', verifyUser, deleteKindergarten);

module.exports = router;
