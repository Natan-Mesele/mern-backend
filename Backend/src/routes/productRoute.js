const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const { authenticate } = require('../middleware/authenticate');

router.post('/create', authenticate, productController.product);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductByIds);
router.put('/:id', productController.updateProducts);
router.delete('/:id', productController.deleteProducts);

module.exports = router;