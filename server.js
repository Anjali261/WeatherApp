const express = require("express");
const bodyParser = require("body-parser");
const app= express();
const env_config = require("./backend/config/config")
port = env_config.get_active_config().web_port;

app.use(bodyParser,json({
  limit: '50mb',
  parameterLimit: 1000000,
  extended:true
}
));

let allrouter = require("./backend/routes/allrouter");
const { json } = require("body-parser");
app.use("/api",allrouter)

app.get("/",(req,res) =>
{
    res.send({message:"hello, i am from backend"})
} )

app.listen(port, () => console.log(`weather app listening at http://localhost:${port}`))
