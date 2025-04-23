const express = require('express');
const ProductRoutes = express.Router();
 const upload = require('../Middleware/uploadImage');

const ProductController = require('../Controller/productController');
ProductRoutes.post('/products',ProductController.addProduct);
ProductRoutes.post('/addProduct',upload.single('image'), ProductController.addProduct);
 ProductRoutes.get('/get',ProductController.getProduct);
    

module.exports = ProductRoutes;