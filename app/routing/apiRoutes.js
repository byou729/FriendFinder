app.get("/api/friends", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "app/data/friends.js"));
});

app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;

    console.log(newReservation);

    // We then add the json the user sent to the character array
    if (reservations.lengh <= 4) {
        reservations.push(newReservation);
    } else {
        waitlists.push(newReservation);
    }

    // We then display the JSON to the users
    res.json(newReservation);
});