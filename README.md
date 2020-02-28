# Naperville Yelp Search

<hr/>

## Table of Contents
- [About](#About)
- [Prerequisites](#Prerequisites)
- [Usage](#Usage)
- [Modules](#Modules)

### About
This is a full stack JavaScript application for getting a list of businesses and their information in Naperville. The frontend was built in React.js and the backend was built in Node.js.
### Prerequisites
These are the tools that I used. If running the website doesn't work, try matching these versions. The main ones that matter are Yarn, Docker, and Docker-Compose because Docker handles the Node.js version.
 - Node.js version <strong>12.16.1</strong>
 - NPM version <strong>6.13.4</strong>
 - Yarn version <strong>1.12.1</strong>
 - Docker version <strong>18.19.7</strong>
 - Docker-Compose version <strong>1.17.1</strong> 
### Usage
1. Clone the repository.
2. In the root directory of the project (So above `/frontend` and `/backend`) run `yarn`.
    - This will install all the required dependencies in both `/frontend` and `/backend` so it may take a few minutes.
3. Create a `.env` file in the root directory of `/frontend`.
    - This file <i>can</i> contain one value.
    - <i>Optional</i> | Use this if you are using a virtual machine for development and trying to access the website from the host machine. Set `HOST_IP` to the LAN IP of the virtual machine in `.env`.
      Example: `HOST_IP=192.168.1.23`
4. Create a `.env` file in the root directory of `/backend`.
    - This file <i>needs</i> to contain one value.
    - <strong>Required</strong> | To access the Yelp API, we need to give it a valid API key. Put your API key in the `.env` file like this:<br>
      `KEY=MYAPIKEY`
      "KEY" needs to be all uppercase.<br>
5. Run the website by running the commmand `docker-compose up --build` in the root directory of the project (Same place as the `docker-compose.yml` file).
    - This may take a few minutes if it has to download the Node.js images.
6. Frontend will be running at `localhost:3000` with the backend running at `localhost:8080`.
### Modules
Notable modules in this project include: <br>
- Frontend
  - react-router-dom | React routing
  - Redux | State management between components
  - Webpack | Bundling
  - Babel | Convert bundle to browser ready code
  - material-ui | Easy to use material design components for React
- Backend
  - Express | HTTP server
  - Moment | Reliable and easy to use module for getting date and time information
- Frontend and backend
  - Axios | External API requests
  - Dotenv | Environment variable managment
