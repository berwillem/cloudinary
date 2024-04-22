const express = require("express");
const router = express.Router();
const prodcutsControllers = require("../controllers/prodcutsControllers");
const { imageUpload } = require("../middlewares/imageUpload");

router.post("/", imageUpload, prodcutsControllers.createProdcut);

module.exports = router;
