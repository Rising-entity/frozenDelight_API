const express = require("express");
const router = express.Router();
const { signUp, login } = require("../middlewares/auth");
const { createOrders,getOrders } = require("../controllers/user");

router.post("/signUp", signUp);
router.get("/login", login);
router.post("/createOrder", createOrders);
router.get("/getOrders/:id", getOrders);

module.exports = { router };