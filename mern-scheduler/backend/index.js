/* eslint-disable no-console */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
const routes = require("./routes");
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  //process.env.ATLAS_URI ||
  "mongodb://localhost:27017/employee-list",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT} !`);
});
