/*
* David Shefcik 2020
*/

/* Imports */
// Modules
const axios = require("../modules/axios");

/* Route */
// GET /businesses/search
module.exports = app => {
  app.get("/businesses/search", async (req, res) => {
    let { query } = req;

    if(query["query"] && query["offset"]) {
      try {
        let yelpURL = `/businesses/search?term=${encodeURIComponent(query["query"])}&location=naperville&limit=15&offset=${query["offset"]}`;
        let yelpRes = await axios.get(yelpURL);
        let { data } = yelpRes;
        if(data) {
          let results = [];
          let businesses = [];
          // Since Yelp's locations aren't entirely accurate, filter through them and only save businesses that are in Naperville
          data["businesses"].forEach(business => {
            if(business["location"]["city"].toUpperCase() === "NAPERVILLE") {
              businesses.push(business);
            }
          });

          businesses.forEach(business => {
            let location = `${business["location"]["address1"]}, ${business["location"]["city"]} ${business["location"]["state"]}, ${business["location"]["zip_code"]}`;
            let categoriesFromAPI = business["categories"];
            let categories = "";

            if(categoriesFromAPI.length > 1) {
              for(let count = 0; count < categoriesFromAPI.length; count++) {
                // If on last one or array only has two things in it, start with "and" and also don't add comma afterwards. If it is not the last one, add a comma
                if(count === categoriesFromAPI.length - 1) {
                  categories += `and ${categoriesFromAPI[count]["title"]}`;
                } else {
                  if(categoriesFromAPI.length > 2) {
                    categories += `${categoriesFromAPI[count]["title"]}, `;
                  } else {
                    categories += `${categoriesFromAPI[count]["title"]} `;
                  }
                }
              }
            } else {
              categories += categoriesFromAPI[0]["title"];
            }

            let businessResult = {
              id: business["id"],
              name: business["name"],
              categories: categories,
              imageURL: business["image_url"],
              location: location,
              rating: business["rating"],
              reviewCount: business["review_count"],
              yelpURL: business["url"]
            };
            results.push(businessResult);
          });

          return res.status(200).json({ results });
        } else {
          return res.status(500).json({ message: "error" });
        }
      } catch(error) {
        console.log(`Could not query Yelp's API! Reason: ${error}`);
        return res.status(500).json({ message: "yelp_api" });
      }
    } else {
      return res.status(400).json({ message: "invalid_query" });
    }
  });
};