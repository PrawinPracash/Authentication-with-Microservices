require("dotenv").config({ path: process.cwd() + "/../.env" });

// Define a Config class to encapsulate configuration
class Config {
  // Assign the value of the PORT environment variable to the port property
  port = process.env.PORT;
  // Assign the value of the MAIN_SERVICE_API environment variable to the main_service_api property
  main_service_api = process.env.MAIN_SERVICE_API;
}
module.exports = new Config();
