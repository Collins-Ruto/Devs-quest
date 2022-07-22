import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  email: { type: String, required: true},
  github: { type: String, required: true},
  date: { type: String, required: true },
  content: { type: String },
  image: { type: String},
  contributors: [{
    contributor: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String},
  }],
  comment: [
    {
      author: { type: String, required: true },
      date: { type: String, required: true },
      content: { type: String },
    },
  ],
  tags: [String],
});

const CollabData = mongoose.model("CollabData", userSchema);

export default CollabData;
