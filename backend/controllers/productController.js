const Product = require("../models/productModel");

// Create A New Product -- Admin Commands
exports.createProduct = async (req,res,next) => {
    try{

        if(!req.body.name ||!req.body.description ||!req.body.price ||!req.body.category ||!req.body.stock ||!req.body.images ||!req.body.images.public_id ||!req.body.images.url) {
            res.status(400).send("Please Fill All Required Fields!"); // Checking If All The Required Fields Are Filled Or Not!
            console.log("Please Fill All Required Fields!");
            return;
        }

        const existingProduct = await Product.findOne({ name: req.body.name });
        if (existingProduct) {
            console.log('A Product With This Name Already Exists!'); // Checking For Duplication
            return res.status(400).send("A Product With This Name Already Exists!");
        }

        const product = await Product.create(req.body);
        
        res.status(201).json({
            success: true,
            product
        });
        console.log('Created A New Product!');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error Creating A New Product!")
    }
};

// Get All Products -- Admin Commands
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            success: true,
            products
        });
        console.log('Successfully Fetched All Products!');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error Fetching All Products!");
    }
};

// User Commands