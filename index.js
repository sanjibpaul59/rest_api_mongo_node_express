const express = require("express");
const app = express();
const mongoose = require("mongoose");
require(`dotenv/config`);
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//Import routes
const articleRoutes = require("./routes/articles");

//Use route as a middleware
app.use("/articles", articleRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Yahoooo!");
});

//Database connection
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB!");
  }
);

app.listen(8080);
