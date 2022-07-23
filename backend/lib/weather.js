const axios = require("axios")
const config = require("../config/config");
const env_config = config.get_active_config();

exports.getweather = async(req,res)=>{
  let api_key=env_config.weatherAPI;
  let url = env_config.API_URL + "lat=35&lon=139" + "&appid=" + "api_key"  ;
  let data = await axios.get("url");
  console.log(data);
  return res.JSON(data)
}
