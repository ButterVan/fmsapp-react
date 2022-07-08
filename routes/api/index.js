const router = require("express").Router();
const cowRoutes = require("./cowRoutes");

router.use("/user", cowRoutes);

module.exports = router;