let db = require("../data/vehicles")

//A.  Return all comments
let getVehicles = function(req,res){
  res.json(db);
}
let getVehicle = function(req,res){
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
let addVehicle = function(req,res){
  let vehicle = req.body;
  let next = db.length+1;
  vehicle._id = next
  let newVehicle = {
    _id: vehicle._id,
    imgURL: vehicle.imgURL,
    year: vehicle.year,
    make: vehicle.make,
    model: vehicle.model,
    price: vehicle.price,
    km: vehicle.km,
    miles: vehicle.miles,
    fuel: vehicle.fuel,
    city: vehicle.city,
    isNew: vehicle.isNew
}
  db.push(newVehicle);
  res.json(newVehicle);
}
module.exports = {
  getVehicles,
  getVehicle,
  addVehicle
}