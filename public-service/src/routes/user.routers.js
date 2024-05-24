// Import necessary modules
const express = require("express");
const apiKeyMiddleware = require("../../common/middlewares/apiKeyMiddleware");
const userController = require("../controllers/user.controller");

const router = express.Router();

// Define route for fetching public user profile
router.get(
  "/api/v1/public/profile",
  apiKeyMiddleware,
  userController.getUserDetails
);

module.exports = router;
