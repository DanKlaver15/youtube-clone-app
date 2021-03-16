const mongoose = require("mongoose");
const { replySchema } = require("./Reply");

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, minlength: 2, maxlength: 300 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  replies: [{ type: replySchema }],
  videoId: { type: String, required: true },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
