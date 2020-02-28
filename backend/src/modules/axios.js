/*
* David Shefcik 2020
*/

/* Imports */
// Modules
require("dotenv").config();
const axios = require("axios");

/* Instance */
const instance = axios.create({
  baseURL: "https://api.yelp.com/v3",
  timeout: 5000,
  headers: {
    "Authorization": `Bearer ${process.env.KEY}`
  }
});

/* Export */
module.exports = instance;