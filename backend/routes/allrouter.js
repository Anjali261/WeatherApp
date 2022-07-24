const express = require("express");
const app = express.Router();
const weatherLib = require("../lib/weather");

app.get("/getCurrentWeather",weatherLib.getweather)
module.exports = app;
