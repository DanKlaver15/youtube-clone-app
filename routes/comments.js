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
  const { error } = validateComment(req.body);

  if (error) {
    return res.status(400).send(error);
  }

  let comment = new Comment({ ...req.body, videoId: req.params.videoId });

  try {
    comment = await comment.save();

    return res.send(comment);
  } catch (err) {
    return res.status(400).send(`Database Error: ${err}`);
  }
});

router.put("/:commentId", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.commentId,
      req.body,
      { new: true }
    );

    return res.send(comment);
  } catch (err) {
    return res.status(400).send(`Database Error: ${err}`);
  }
});

function validateComment(comment) {
  const schema = Joi.object({
    text: Joi.string().min(2).max(300).required(),
  });
  return schema.validate(comment);
}

module.exports = router;
