let express = require("express");

let router = express.Router()

let controller = require("./vehiclesController")

router.get("/vehicles", controller.getVehicles);
router.get("/vehicles/:id", controller.getVehicle);
router.post("/vehicles", controller.addVehicle)

module.exports = router;