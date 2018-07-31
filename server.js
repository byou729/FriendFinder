var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;;
var friends = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function (req, res) {
    return res.json("app/data/friends.js");
});

// Create New Characters - takes in JSON input
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;

    console.log(newFriend);

    // We then add the json the user sent to the character array
    friends.push(newFriend);

    // We then display the JSON to the users
    // We then display the JSON to the users
    res.json(newFriend);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
