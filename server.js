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

// Port
const PORT = 8080;
