let db = require("../data/products")

//A.  Return all comments
let getProducts = function(req,res){
  res.json(db);
}
let getProduct = function(req,res){
  let id = req.params.id;
  let found;
  for(let i=0;i<db.length;i++){
      let item = db[i];
      if(item._id == id){
          found = item;
      }
  }
  
  res.json(found)
}
let addProduct = function(req,res){
  let product = req.body;
  let next = db.length+1;
  product._id = next
  let newProduct = {
    _id: product._id,
    name: product.name,
    description: product.description,
    rating: product.rating,
    imgURL: product.imgURL,
    price: product.price,
    category: product.category,
    reviews: product.reviews
}
  db.push(newProduct);
  res.json(newProduct);
}
module.exports = {
  getProducts,
  getProduct,
  addProduct
}