var path = require("path");


  router.get("/home",function(req, res){
    res.sendFile(path.join(__dirname, "../views/home.html"));
  });
  router.get("/survey",function(req,res){
    res.sendFile(path.join(__dirname, "../views/survey.html"));
  });
