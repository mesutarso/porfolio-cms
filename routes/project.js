var express = require("express");
const { create, list, getById, remove} = require("../controller/project");
var router = express.Router();

router.post("/create", create);

router.get("/list/:limit?", list);
router.get("/:id", getById);
router.delete("/delete/:id", remove);


module.exports = router;
