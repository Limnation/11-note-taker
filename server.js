// Dependencies
// Requires express
const express = require("express");
// Requires FS (file ststem)
const fs = require("fs");
// Requires the DB json file
let db = require("./db/db.json");
// Requires path (provides a way of working with directories and file paths)
var path = require("path");
// Express App
const app = express();
// set the environment variable PORT to tell your web server what port to listen on or(||) use static port 3000
const PORT = process.env.PORT || 3000;

// middleware
// parses data to json
app.use(express.json());
//  syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded
app.use(express.urlencoded({ extended: true }));
// Servers static files from the public file structure
app.use(express.static(`${__dirname}/public`));
console.log(__dirname);
