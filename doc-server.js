"use strict";

// Dependencies
const express = require("express");

// Global Variables
const app = express();
const port = 3000;

// Create an Express server.
const ExpressServer = require("./lib/express-server.js");
const expressServer = new ExpressServer(app, port);
expressServer.start();

/* Start up the Express web server */
app.listen(process.env.PORT || port);
console.log(`Express started on port ${port}`);
