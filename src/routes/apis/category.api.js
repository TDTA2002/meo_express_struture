import express from "express";
const router = express.Router();

import categoryController from '../../controller/category.controller'
router.post('/', categoryController.create);

module.exports = router;