const express = require("express");
const apiKeyMiddleware = require("../../common/middlewares/apiKeyMiddleware");
const apiKeyController = require("../controllers/apiKey.controller");

const router = express.Router();

// Define route for fetching public API key by user ID
router.get("/api/v1/public/apiKey", apiKeyController.getApiKeyByUserId);

module.exports = router;
