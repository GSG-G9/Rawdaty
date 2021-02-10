const router = require('express').Router();

const { getKindergarten } = require('../controllers');

router.get('/kindergarten', getKindergarten);

module.exports = router;
