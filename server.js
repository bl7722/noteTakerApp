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
  


app.get("/api/notes", function(req, res) {
    fs.readFile('./db/db.json','utf-8',function(err, data){
        if (err) throw err;
        console.log(data);
        return res.json(JSON.parse(data));
    })
});


app.post("/api/notes", function(req, res) {
    var newNote = JSON.stringify(req.body);
    notes.push(newNote)
    fs.writeFile('./db/db.json',`[${notes}]`,"utf-8",function(err){
        if (err) throw err;
        return res.json(req.body)
})
});


app.delete("/api/notes/:id", function(req, res){
    var target = req.params.id
        fs.readFile('./db/db.json', 'utf-8', function(err, data){
        if (err) {
        throw err;
    }
    let object = JSON.parse(data);
        for (note in object) {
        if (object[note].id === target) {
   
});




app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
