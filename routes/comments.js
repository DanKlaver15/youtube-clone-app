const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { Comment } = require("../models/Comment");

router.get("/comments/:videoId", async (req, res) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });

    return res.send(comments);
  } catch (err) {
    return res.status(400).send(`Database Error: ${err}`);
  }
});