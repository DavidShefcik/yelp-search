/*
* David Shefcik 2020
*/

/* Imports */
// Modules
const axios = require("../modules/axios");
const moment = require("moment-timezone");

/* Route */
// GET /businesses/info?id=id
module.exports = app => {
  app.get("/businesses/info", async (req, res) => {
    let { query } = req;

    if(query["id"]) {
      try {
        let yelpURL = `/businesses/${query["id"]}`;
        let yelpRes = await axios.get(yelpURL);

        let { data } = yelpRes;
        if(data) {
          let formattedHours = [];
          let isClosed = true;
          let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
          if(data["hours"] != undefined) {
            let hoursFromAPI = data["hours"][0]["open"];

            hoursFromAPI.forEach(hour => {
              let formattedMilitaryStart = hour["start"].substring(0, 2) + ":" + hour["start"].substring(2);
              let formattedMilitaryEnd = hour["end"].substring(0, 2) + ":" + hour["end"].substring(2);
              let timeInfo = {
                day: days[hour["day"]],
                open: moment(formattedMilitaryStart, "HH:mm").format("h:mm a"),
                close: moment(formattedMilitaryEnd, "HH:mm").format("h:mm a")
              };
              formattedHours.push(timeInfo);
            });
            isClosed = !data["hours"][0]["is_open_now"];
          }

          let info = {
            id: data["id"],
            name: data["name"],
            address: `${data["location"]["address1"]}, ${data["location"]["city"]} ${data["location"]["state"]}, ${data["location"]["zip_code"]}`,
            imageURL: data["image_url"],
            phone: data["display_phone"],
            hours: formattedHours,
            overallRating: data["rating"],
            isClosed: isClosed,
            currentDay: days[moment().tz("America/Chicago").weekday() - 1],
            yelpURL: data["url"]
          };

          return res.status(200).json({ info });
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