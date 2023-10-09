const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

//ROUTES
router.get("/datos", authController.isAuthenticated);
router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/logout", authController.logout);
router.post("/progreso", authController.progreso);

module.exports = router;
