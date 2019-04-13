const express = require("express");
const router = express.Router();
const HamishcoinRoutes = require("./hamishcoin_routes");

router.get("/", (req, res) => res.send("Welcome"));
router.use("/hamishcoin", HamishcoinRoutes);

module.exports = router;