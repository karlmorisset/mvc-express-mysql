const express = require("express");

const { HerosController } = require("./controllers");

const herosRouter = express.Router();

herosRouter.get("/", HerosController.browse);
herosRouter.get("/:id", HerosController.read);
herosRouter.put("/:id", HerosController.edit);
herosRouter.post("/", HerosController.add);
herosRouter.delete("/:id", HerosController.delete);

module.exports = herosRouter;
