// var express = require("express");
// var router = express.Router();
var db = require("../models");

module.exports = function(app) {
  app.get("/api/answers/", function(req, res) {
    db.Answer.findAll({
    })
    .then(function(dbAnswer) {
      res.json(dbAnswer);
    });
  });
  app.get("/api/answers/:id", function(req, res) {
    db.Answer.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbAnswer) {
      res.json(dbAnswer);
    });
  });
app.post("/api/answers",function(req,res){
  db.Answer.create(req.body).then(function(dbAnswer){
    res.json(dbAnswer);
  });
});
// app.put("/api/answers", function(req, res) {
//   db.Answer.update({
//     answer_numeric0:req.body.answer_numeric0},
// {
//       where: {
//         id: req.body.UserId
//       }
//
//     }).then(function(dbAnswer) {
//       res.json(dbAnswer);
//     });
// });
};
