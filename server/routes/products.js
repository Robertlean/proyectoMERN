const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');
const productMiddleware = require('../middlewares/products')

router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.post('/create', productMiddleware.validator, productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.remove)

module.exports = router