const express = require("express");
const router = express.Router();
const authController = require("../controllers/authentication.controllers");

router.post("/login", authController.login);
router.post("/register");
router.delete("/logout");

router.post("/refresh-token");
router.post("/access-token");

module.exports = router;
