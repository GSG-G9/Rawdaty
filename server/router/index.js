const router = require('express').Router();

const { getUsers } = require('../controllers');

router.get('/users', getUsers);
