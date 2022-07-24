const axios = require("axios")
const config = require("../config/config");
const env_config = config.get_active_config();
const moment = require("moment");

exports.getWeatherForecast = async (req,res)=>{
    let api_key = env_config.weatherAPI;
    let location = req.params.location
    console.log(`finding weather by location = ${location}`)
}
