const router = require('express').Router();

const { addComments } = require('../controllers');

console.log('router');
router.post('/kindergarten/:kindergartenId/comments', addComments);

module.exports = router;
