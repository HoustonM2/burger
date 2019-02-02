
var express = require("express");
var exphbs = require("express-handlebars");
//Port 
var port = process.env.PORT || 3000;
var app = express();
;


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(port);
console.log("App listening on " + port)