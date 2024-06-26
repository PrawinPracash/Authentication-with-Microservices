require("dotenv").config({ path: process.cwd() + "/../.env" });
class Config {
  port = process.env.PORT;
  database = process.env.DATABASE;
  jwtSecret = process.env.JWT_SECRET;
  jwtExpiresIn = process.env.JWT_EXPIRES_IN;
}
module.exports = new Config();
