require('dotenv').config();
const Product = require('../Model/productModel.js');
const addProduct = async (req, res) => {
    console.log(req.body);
    // console.log(req.file);
    const {name,price,description,quantity}= req.body;
    console.log(name,price,description,quantity);
    

    
    try{
        const product = new Product({
            name,
            price,
            description,
            quantity,
            image: req.file.path
        });
        const savedProduct = await product.save();
        console.log("Product added successfully:", savedProduct);
        res.status(201).json({message: "Product added successfully", savedProduct});
    }
    catch(error){
         console.error("Error adding product:", error);
        return res.status(500).json(error.message);
    }

}
const getProduct = async (req, res) => {
    try {
       // const {  name,price, description, quantity, } = req.body;
        const products = await Product.find({});
        if (products) {
            res.status(200).json(products);
        }
    }
    catch (err) {
        res.status(500).json({ message: "Error while fetching products" });
    }
}

module.exports = {addProduct, getProduct};