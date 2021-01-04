//! NPM Modules
const express = require("express");
const app = express();

//! Startup / Set configurations
require("./config/config")(app, express);

//! Listening
require("./config/listener")(app);
