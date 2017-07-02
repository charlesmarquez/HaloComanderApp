var express = require("express");
var app = express();
var path = require("path");
var rootPath = path.normalize(__dirname + "/../");
var bodyParser = require("body-parser");
var cors = require('express-cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(rootPath + "/app"));

app.use(cors({
    allowedOrigins: [
        'haloapi.com', 'photos.google.com'
    ]
}));

app.get("*", function (req, res) {
    res.sendFile(rootPath + "/app/index.html");
});

app.listen(8080);
console.log("Listening on port 8080...");