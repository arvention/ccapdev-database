
// import module `express`
const express = require('express');

// import module routes from `routes/routes.js`
const routes = require('./routes/routes.js');

const app = express();
const port = 9090;

// set `hbs` as view engine
app.set('view engine', 'hbs');

// set the folder `public` as folder containing static assets such as css, js, and image files
app.use(express.static('public'));

// define the paths contained in `routes/routes.js`
app.use('/', routes);

// binds the server to a specific port
app.listen(port, function () {
    console.log('app listening at port ' + port);
});
