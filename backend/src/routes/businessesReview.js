/*
* David Shefcik 2020
*/

/* Imports */
// Modules
const axios = require("../modules/axios");
const moment = require("moment");

/* Route */
// GET /businesses/review?id=id
module.exports = app => {
  app.get("/businesses/review", async (req, res) => {
    let { query } = req;

    if(query["id"]) {
      try {
        let yelpURL = `/businesses/${query["id"]}/reviews`;
        let yelpRes = await axios.get(yelpURL);

        let { data } = yelpRes;
        if(data) {
          let review = {};
          if(data["reviews"].length > 0) {
          // Pick random review
            let reviewFromAPI = data["reviews"][Math.floor(Math.random() * data["reviews"].length)];
            review = {
              id: reviewFromAPI["id"],
              rating: reviewFromAPI["rating"],
              text: reviewFromAPI["text"],
              time: moment(reviewFromAPI["time_created"], "YYYY-MM-DD HH:mm:ss").format("MMMM Do YYYY, h:mm a"),
              user: {
                id: reviewFromAPI["user"]["id"],
                name: reviewFromAPI["user"]["name"],
                url: reviewFromAPI["user"]["profile_url"]
              }
            };
          }
          return res.status(200).json({ review });
        } else {
          return res.status(500).json({ message: "error" });
        }
      } catch(error) {
        console.log(`Could not query Yelp's API! Reason: ${error}`);
        return res.status(500).json({ message: "yelp_api" });
      }
    } else {
      return res.status(400).json({ message: "invalid_id" });
    }
  });
};