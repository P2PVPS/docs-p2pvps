/*
 * Copyright 2017 Chris Troutner & P2PVPS.org
 * Licensing Information: MIT License
 *
 * This library file creates an Express server for serving a web app.
 */

"use strict";

// Libraries
const express = require("express");

// Globals

class ExpressServer {
  constructor(app, port) {
    this.app = app;
    this.port = port;
  }

  start() {
    // Use Handlebars for templating
    const exphbs = require("express3-handlebars");
    let hbs;

    // For gzip compression
    //app.use(express.compress());

    //Config for Production and Development
    this.app.engine(
      "handlebars",
      exphbs({
        // Default Layout and locate layouts and partials
        defaultLayout: "main",
        layoutsDir: "doc/",
        partialsDir: "doc/",
      })
    );

    // Locate the views
    console.log('__dirname = '+ __dirname);
    this.app.set("views", `${__dirname}/../doc`);

    // Locate the assets
    this.app.use(express.static(`${__dirname}/../doc`));

    // Set Handlebars
    this.app.set("view engine", "handlebars");

    // Index Page
    this.app.get("/", function(request, response, next) {
      response.render("index");
    });

    // Start up the Express web server
    this.app.listen(process.env.PORT || this.port).on("error", expressErrorHandler);
    console.log('Express started on port ' + this.port);

    // Handle generic errors thrown by the express application.
    function expressErrorHandler(err) {
      if (err.code === "EADDRINUSE")
        console.error(`Port ${this.port} is already in use. Is this program already running?`);
      else console.error(JSON.stringify(err, null, 2));

      console.error("Express could not start!");
      process.exit(0);
    }
  }
}

module.exports = ExpressServer;
