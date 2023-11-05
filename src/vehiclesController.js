let db = require("../data/vehicles")

//A.  Return all comments
let getVehicles = function(req,res){
  res.json(db);
}
let getVehicle = function(req,res){}
let addVehicle = function(req,res){}
module.exports = {
  getVehicles,
  getVehicle,
  addVehicle
}