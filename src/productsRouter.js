let express = require("express");

let router = express.Router()

let controller = require("./productsController")

router.get("/products", controller.getProducts);
router.get("/products/:id", controller.getProduct);
router.post("/products", controller.addProduct)

module.exports = router;