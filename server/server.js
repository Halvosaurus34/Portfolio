const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

// Database

// Test db
app.use(express.static("client/build"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", require("./routes/contactMe"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, `client/build/index.html`));
});

//Quotes routes

app.listen(PORT, console.log(`Server started on port ${PORT}`));
