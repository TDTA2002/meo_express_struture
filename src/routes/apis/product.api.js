import express from "express";
const router = express.Router();

import multer from "multer";

const imgProductStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/products')
  },
  filename: function (req, file, cb) {
    cb(null, `product_${Date.now() * Math.random()}.${file.mimetype.split('/')[1]}`)
  }
})

const productUpload = multer({ storage: imgProductStorage })

import productController from "../../controller/product.controller";
router.post("/", productUpload.array('imgs'), productController.create)

module.exports = router;

