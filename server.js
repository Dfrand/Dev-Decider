var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

var db = require("./models");
app.use(bodyParser.urlencoded({ extended:false}));

// app.use(bodyParser.json({type: 'application/**json'}))
// app.use(bodyParser.raw({type:'application/vnd.custom-type'}))
// app.use(bodyParser.text({type:'text/html'}))
app.use(bodyParser.json());
app.use(express.static(__dirname + "/views"));

require("./controllers/htmlRoutes.js")(app);
require("./controllers/answerRoutes.js");
require("./controllers/userRoutes.js");


db.sequelize.sync({force:true}).then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
});
