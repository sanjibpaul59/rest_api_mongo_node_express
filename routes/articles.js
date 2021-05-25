const express = require("express");
const router = express.Router();
const Articles = require("../models/Articlemodel");

router.get("/", (req, res) => {
  res.send("Articles");
});

router.post("/", (req, res) => {
  const article = new Articles({
    title: req.body.title,
    description: req.body.description,
  });
  article
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
