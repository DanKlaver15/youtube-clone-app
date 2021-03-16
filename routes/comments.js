const express = require("express");
const router = express.Router();
const Joi = require("joi");
const Comment = require("../models/Comment");

router.get("/:videoId", async (req, res) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });

    return res.send(comments);
  } catch (err) {
    return res.status(400).send(`Database Error: ${err}`);
  }
});

router.post("/:videoId", async (req, res) => {
  let comment = new Comment({ ...req.body, videoId: req.params.videoId });

  try {
    comment = await comment.save();

    return res.send(comment);
  } catch (err) {
    return res.status(400).send(`Database Error: ${err}`);
  }
});

module.exports = router;
