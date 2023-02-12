const express = require("express");
const categoryController = require("../controllers/categoryController.js");
const categoryRouter = express.Router();

categoryRouter.use("/create", categoryController.addCategory);
categoryRouter.use("/", categoryController.getCategories);

module.exports = categoryRouter;