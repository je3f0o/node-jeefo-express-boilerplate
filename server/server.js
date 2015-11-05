/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name  : server.js
* Purpose    :
* Created at : 2015-09-29
* Updated at : 2015-11-05
* Author     : jeefo
_._._._._._._._._._._._._._._._._._._._._.*/

"use strict";

var express     = require("express"),
	app         = express(),
	server      = require("http").Server(app),
	config      = require("../config"),
	body_parser = require("body-parser");

// Configuration
app.set("views", config.views_dir);
app.set("view engine", "jade");
app.enable("view cache");
app.disable("x-powered-by");

// Express Middleware - Node Package Modules
app.use(require("response-time")());					// Response time header for : Client side header 
// app.use(require("compression")({ threshold: 0 }));		// Compression for          : Performance
// app.use(require("cors")());								// Cross Origin
app.use(body_parser.json());							// Request Body Parser for  : Application/json
app.use(body_parser.urlencoded({ extended : false }));	// Request Body Parser for  : Application/x-www-form-urlencoded

if (process.env.NODE_ENV !== "production") {
	app.use(require("morgan")("short")); // i guess dev
}

// Serving static files
app.use(express.static(config.bower_dir));
app.use(express.static(config.public_dir));

// My own private middleware modules
// app.use(require("response_ex"));
app.use(require("jeefo-express-paginator"));

// Define routes
require("./routes")(app);

module.exports = server;
