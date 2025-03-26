const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/users', userController.getAllUser);
router.get('/users/:id', userController.getUserByIds);

module.exports = router;
