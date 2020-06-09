var express = require("express");
var path = require("path");
var fs = require('fs');
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

var notes = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  
app.get("/notes", function(req, res) {
   res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  

