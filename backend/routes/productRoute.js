const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct); // .delete(deleteProduct).get(getProductDetails); This is the shortcut of doing the same thing, only if the URL is same
router.route("/product/:id").delete(deleteProduct);
router.route("/product/:id").get(getProductDetails);

module.exports = router