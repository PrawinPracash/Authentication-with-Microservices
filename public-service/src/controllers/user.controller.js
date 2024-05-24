// Import necessary modules
const { default: axios } = require("axios");
const apiResponseHandler = require("../../helpers/apiResponseHandler");
const config = require("../../common/config/config");

class UserController {
  // Method to handle request for fetching user details
  async getUserDetails(req, res) {
    try {
      // Extract API key from request headers
      const apiKey = req.headers["x-api-key"];
      // Make a GET request to main service API to fetch user details
      const response = await axios.get(`${config.main_service_api}/user`, {
        headers: {
          "x-api-key": apiKey,
        },
      });
      
      // Extract user details from response
      const user = response.data.data;
      console.log(response);

      // Prepare user details object with required fields
      const userDetails = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      return apiResponseHandler.successResponse(
        res,
        "User details fetched successfully",
        userDetails
      );
    } catch (err) {
      let errorMessage = err.message;
      if (err.data && err.data.message) {
        errorMessage = err.data.message;
      }
      return apiResponseHandler.errorResponse(
        res,
        "Cannot fetch user details, please try again",
        errorMessage
      );
    }
  }
}

module.exports = new UserController();
