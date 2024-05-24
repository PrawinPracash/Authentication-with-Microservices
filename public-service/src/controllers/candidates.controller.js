const { default: axios } = require("axios");
const apiResponseHandler = require("../../helpers/apiResponseHandler");
const config = require("../../common/config/config");

class CandidateController {
  // Method to handle request for fetching all candidates
  async getAllCandidates(req, res) {
    try {
      // Extract API key from request headers
      const apiKey = req.headers["x-api-key"];
      // Make a GET request to main service API to fetch all candidates
      const response = await axios.get(
        `${config.main_service_api}/candidates`,
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      );
      // Extract candidates from response data
      const candidates = response.data.data;
      return apiResponseHandler.successResponse(
        res,
        "Candidates fetched successfully",
        candidates
      );
    } catch (err) {
      let errorMessage = err.message;
      if (err.data && err.data.message) {
        errorMessage = err.data.message;
      }
      return apiResponseHandler.errorResponse(
        res,
        "Cannot fetch candidates, please try again",
        errorMessage
      );
    }
  }
}

module.exports = new CandidateController();
