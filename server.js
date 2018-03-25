var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fileUpload = require("express-fileupload");
var s3 = require("s3");
var fs = require("fs");
// var keys = require("./keys.js");


var app = express();

// var client = s3.createClient({
// 	maxAsyncS3: 20, // this is the default
// 	s3RetryCount: 3, // this is the default
// 	s3RetryDelay: 1000, // this is the default
// 	multipartUploadThreshold: 20971520, // this is the default (20 MB)
// 	multipartUploadSize: 15728640, // this is the default (15 MB)
// 	s3Options: {
// 		accessKeyId: keys.s3accesskey,
// 		secretAccessKey: keys.s3secretaccesskey,
// 		// any other options are passed to new AWS.S3()
// 		// See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
// 	},
// });

app.use(fileUpload());

var PORT = process.env.PORT || 3306;


var db = require("./models");
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json({type: 'application/**json'}))
// app.use(bodyParser.raw({type:'application/vnd.custom-type'}))
// app.use(bodyParser.text({type:'text/html'}))
app.use(bodyParser.json());
app.use(express.static(__dirname + "/views"));

require("./controllers/htmlRoutes.js")(app);
require("./controllers/answerRoutes.js")(app);
// require("./controllers/userRoutes.js")(app);


// var client = s3.createClient({
//   maxAsyncS3: 20,
//   s3RetryCount: 3,
//   s3RetryDelay: 1000,
//   multipartUploadThreshold: 20971520,
//   multipartUploadSize: 15728640,
//   s3Options: {
//     accessKeyId: keys.s3accesskey,
//     secretAccessKey: keys.s3secretaccesskey
//   },
// });
db.sequelize.sync({force:true}).then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
});
