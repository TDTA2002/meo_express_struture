import express from "express";
const router = express.Router();

import categoryController from '../../controller/category.controller'
import categoryMiddleware from "../../middlewares/category.middleware";

router.post('/', categoryController.create);
router.get('/', categoryMiddleware.readManyValidate, categoryController.readMany);
router.patch('/:categoryId', categoryMiddleware.updateValidate, categoryController.update);


module.exports = router;