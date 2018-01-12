"use strict";

// Dependencies
const express = require("express");

// Global Variables
const app = express();
const port = 8000;

// Create an Express server.
const ExpressServer = require("./lib/express-server.js");
const expressServer = new ExpressServer(app, port);
expressServer.start();
