/*
* David Shefcik 2020
*/

/* Imports */
// Modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

/* App */
// Init.
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
require("./routes/businessesSearch")(app);
require("./routes/businessesInfo")(app);
require("./routes/businessesReview")(app);

// Listen
app.listen(8080, () => console.log("Backend listening on port 8080!"));