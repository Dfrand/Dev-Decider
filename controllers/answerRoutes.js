// var express = require("express");
// var router = express.Router();
var db = require("../models");

module.exports = function(app) {
app.post("api/answers",function(req,res){
  dbAnswer.create(req.body).then(function(dbAnswer){
    res.json(dbAnswer);
  });
});
}
