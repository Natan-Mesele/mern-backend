// routes/cartRoute.js
const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController');
const { authenticate } = require('../middleware/authenticate');

// Route to create a new cart
router.post('/create', authenticate, cartController.createCart);

// Route to update an existing cart
router.put('/update', authenticate, cartController.updateCart);

// Route to get a user's cart
router.get('/:userId', authenticate, cartController.getCart);

module.exports = router;
