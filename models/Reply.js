import mongoose from "mongoose";

const replySchema = new mongoose.Schema({
  text: { type: String, required: true, minlength: 2, maxlength: 300 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

module.exports = replySchema;