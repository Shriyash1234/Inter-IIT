const express = require("express");

const app = express();
app.use("/assests",express.static("assests"))
app.set("view engine","ejs");
require('https').globalAgent.options.rejectUnauthorized = false;
const photo = require('./Name_Inter_IIT.json')

app.get("/",function(req,res){
    res.render("index",{photo:photo})
  }
)
let port = process.env.PORT;
if(port==null||port==""){
  port = 600
}
app.listen(port);