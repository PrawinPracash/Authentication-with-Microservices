const config = require("../../common/config/config");
const apiResponseHandler = require("../../helpers/apiResponseHandler");
const axios = require("axios");

class ApiKeyController {
  // Method for fetching API key by user ID
  async getApiKeyByUserId(req, res) {
    try {
      // Extract user ID from request query parameters
      const { userId } = req.query;

      // Make a GET request to the main service API to fetch API key mapping by user ID
      const response = await axios.get(
        `${config.main_service_api}/apiKeyMappingByUserId/${userId}`
      );

      // Extract the API key from the response data
      const apiKey = response.data.data.ApiKey;
      return apiResponseHandler.successResponse(
        res,
        "Api key fetched successfully",
        { apiKey }
      );
    } catch (err) {
      return apiResponseHandler.errorResponse(
        res,
        "Cannot fetch apiKey, please try again",
        err.message
      );
    }
  }
}

module.exports = new ApiKeyController();
