const express = require("express");
const router = express.Router();
const Articles = require("../models/Articlemodel");

router.get("/", (req, res) => {
  res.send("Articles");
});

router.post("/", async (req, res) => {
  const article = new Articles({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedArticle = await article.save();
    res.json(savedArticle);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
