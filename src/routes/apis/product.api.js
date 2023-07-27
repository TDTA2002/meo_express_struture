import express from 'express';
const router = express.Router();
import productController from '../../controller/product.controller';
// router.post('/set-product-data', productController.createProductDefault);
router.get('/', productController.getProducts);
// router.post('/', productController.createProduct);
module.exports = router; 


