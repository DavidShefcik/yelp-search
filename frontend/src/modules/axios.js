/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import axios from "axios";

/* Instance */
// IP
let ip = "localhost";
if(process.env.HOST_IP) {
  ip = process.env.HOST_IP;
}

// Create
const instance = axios.create({
  baseURL: `http://${ip}/api`,
  timeout: 10000
});

/* Export */
export default instance;