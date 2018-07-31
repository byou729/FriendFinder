app.get("/api/friends", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "app/data/friends.js"));
});

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
