const router = require('express').Router();

const { getKindergarten, getSpecificKindergarten } = require('../controllers');

router.get('/kindergarten', getKindergarten);
router.get('/kindergarten/:kindergartenId', getSpecificKindergarten);

module.exports = router;
