const router = require('express').Router();

const { getKindergartenById } = require('../controllers');

router.get('/kindergarten/:kindergartenId', getKindergartenById);

module.exports = router;
