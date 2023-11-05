let db = require("../data/products")

//A.  Return all comments
let getProducts = function(req,res){
  res.json(db);
}
let getProduct = function(req,res){}
let addProduct = function(req,res){}
module.exports = {
  getProducts,
  getProduct,
  addProduct
}