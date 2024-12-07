const express = require("express");
const to_doController = require("../controller/to-do_controller");
const to_doRouter = express.Router();
to_doRouter.get("/", to_doController.Get$to_do);
to_doRouter.post("/", to_doController.Post$to_do);
to_doRouter.put("/",to_doController.SetStatus)
to_doRouter.delete("/", to_doController.Delete$to_do);
to_doRouter.get("/:id",to_doController.GetPut$to_do);

to_doRouter.put("/",to_doController.Put$to_do);

module.exports=to_doRouter