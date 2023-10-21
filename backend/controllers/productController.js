const Product = require("../models/productModel");

// create products
exports.createProduct = async (req,res,next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
    
}

// get all products
exports.getAllProducts = (req,res) => { //callback function

    res.status(200).json({message:"Route is working"})
    
}