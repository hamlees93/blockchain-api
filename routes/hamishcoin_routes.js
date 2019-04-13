const express = require("express");
const router = express.Router();
// const { celebrate, Joi } = require("celebrate");
const HamishcoinController = require("./../controllers/hamishcoin_controller");

router.get("/", HamishcoinController.index);

router.get("/newuser", HamishcoinController.newUser);

module.exports = router;