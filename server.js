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
