// import required modules
const express = require("express");
const config = require("../common/config/config");

const app = express();

// Import routers for different parts of the API
const ApiKeyRouter = require("./routes/apiKey.routes");
const UserRouter = require("./routes/user.routers");
const CandidateRouter = require("./routes/candidate.routes");

app.use(express.json());

// Define the port on which the server will run
const port = config.port;

// Mount routers to specific routes
app.use(ApiKeyRouter);
app.use(UserRouter);
app.use(CandidateRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
