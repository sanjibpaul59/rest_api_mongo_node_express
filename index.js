const express = require("express");
const app = express();
const mongoose = require("mongoose");
require(`dotenv/config`)


//Import routes
const articleRoutes = require('./routes/articles');

//Use route as a middleware
app.use('/articles', articleRoutes)

//Routes
app.get("/", (req, res) => {
  res.send("Yahoooo!");
});


//Database connection
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true },
  () => {
    console.log("Connected to DB!");
  }
);

app.listen(8080);
