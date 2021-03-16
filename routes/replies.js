const express = require("express");
const router = express.Router();
const Joi = require("joi");
const Comment = require("../models/Comment");
const { Reply } = require("../models/Reply");

router.post("/:commentId", async (req, res) => {
  const { error } = validateReply(req.body);

  if (error) {
    return res.status(400).send(error);
  }

  try {
    let comment = await Comment.findById(req.params.commentId);

    if (!comment)
      return res
        .status(404)
        .send("The comment with the given id was not found.");

    let reply = new Reply(req.body);
    comment.replies.push(reply);

    comment = await comment.save();

    return res.send(comment);
  } catch (err) {
    return res.status(400).send(`Database Error: ${err}`);
  }
});

function validateReply(reply) {
  const schema = Joi.object({
    text: Joi.string().min(2).max(300).required(),
  });
  return schema.validate(reply);
}

module.exports = router;
