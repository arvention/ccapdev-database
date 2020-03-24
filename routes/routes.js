
// import module `express`
const express = require('express');

// import module routes from `../controller/controller.js`
const controller = require('../controller/controller.js')

const app = express();

// execute function getFavicon() as defined in object controller in `../controller/controller.js`
// when a client sends an HTTP GET request for `/favicon.ico`
app.get('/favicon.ico', controller.getFavicon);

// execute function getFavicon() as defined in object controller in `../controller/controller.js`
// when a client sends an HTTP GET request for `/favicon.ico`
app.get('/:username', controller.getProfile);

// exports the object `app` (defined above) when another script exports from this file
module.exports = app;
