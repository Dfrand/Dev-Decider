var path = require("path");
// var express = require("express");
// var router = express.Router();
// var db = require("../models");

module.exports = function(app) {
// app.get("/",function(req, res){
//     res.sendFile(path.join(__dirname, "../views/index.html"));
//   });
  app.get("/home",function(req, res){
      res.sendFile(path.join(__dirname, "../views/home.html"));
    });
//   app.get('/', function(req, res) {
// 	res.sendFile(path.join(__dirname, '/views', 'index.html'));
// });
app.get("/answers",function(req, res){
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });
  app.get("/questions",function(req,res){
    res.sendFile(path.join(__dirname, "../views/questions.html"));
  });
}
