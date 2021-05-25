const express = require("express");
const router = express.Router();
const Articles = require("../models/Articlemodel");

//get back all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Articles.find();
    res.json(articles);
  } catch (err) {
    res.json({ message: err });
  }
});
//get a speific article
router.get("/:id", async (req, res) => {
  try {
    const article = await Articles.findById(req.params.id);
    res.json(article);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete an article

router.delete("/:id", async (req, res) => {
  try {
    const deletedArticle = await Articles.deleteOne({ _id: req.params.id });
    res.json(deletedArticle);
  } catch (err) {
    res.json(err);
  }
});

//update of an article

router.patch("/:id", async (req, res) => {
  try {
    const updatedArticle = await Articles.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(updatedArticle)
  } catch (err) {
      res.json({message: err})
  }
});

//add a new post
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
