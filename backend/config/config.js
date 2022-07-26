module.exports={
  "development":{
    'web_port':process.env.PORT||3000,
    'weatherAPI':process.env.weatherAPI||"52efe578bffd9ca4021efd48e8851957",
    'API_URL':"https://api.openweathermap.org/data/2.5"
  },
  "production":{
    'web_port':process.env.PORT||80,
    'weatherAPI':process.env.weatherAPI||"52efe578bffd9ca4021efd48e8851957",
    'API_URL':"https://api.openweathermap.org/data/2.5"
  },
  get_active_config:function() {
    var config_profile =process.env.ENV_MODE || 'development';
    console.log("CONFIG PROFILE SELECTED IS: " + config_profile);
    return this[config_profile];
  }
}
