// var express = require("express");
// var router = express.Router();
var db = require("../models");

module.exports=function(app){
app.post("api/user",function(req,res){
  db.User.create(req.bogy).then(function(dbUser){
    res.json(dbUser);
  })
})
}
