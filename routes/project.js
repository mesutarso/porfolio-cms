var express = require("express");
const { create, list, getById, remove,updateById} = require("../controller/project");
var router = express.Router();

router.post("/create", create);

router.get("/list/:limit?", list);
router.get("/:id", getById);
router.delete("/delete/:id", remove);
router.put("/update/:id", updateById);


module.exports = router;
