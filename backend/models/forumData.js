import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  author_image: { type: String },
  email: { type: String, required: true },
  date: { type: String, required: true },
  content: { type: String },
  comment: [
    {
      author: { type: String, required: true },
      date: { type: String, required: true },
      content: { type: String },
    },
  ],
  image: String,
  tags: [String],
  likes: [String]
});

const ForumData = mongoose.model("ForumData", userSchema);

export default ForumData;
