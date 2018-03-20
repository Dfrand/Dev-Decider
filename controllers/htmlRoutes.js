var path = require("path");
// var express = require("express");
// var router = express.Router();
// var db = require("../models");

module.exports = function(app) {
app.get("/",function(req, res){
    res.sendFile(path.join(__dirname, "../views/home.html"));
  });
  app.get("/question",function(req,res){
    res.sendFile(path.join(__dirname, "../views/question.html"));
  });
}
