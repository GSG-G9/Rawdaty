const router = require('express').Router();

const { getSpecificKindergarten } = require('../controllers');

router.get('/kindergarten/:kindergartenId', getSpecificKindergarten);

module.exports = router;
