import mongoose from "mongoose";
import ForumData from "../models/forumData.js";

const ObjectId = mongoose.Types.ObjectId;

export const getForums = async (req, res) => {
    try {
        const result = await ForumData.find()
        res.status(200).json({ result: result });
    } catch (error) {
        console.log(error.message);
    }
};
export const getForum = async (req, res) => {
    const { id } = req.body;
    const _id = ObjectId(id);

    try {
      const result = await ForumData.findById(_id);
      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error.message);
    }
};
export const createForum = async (req, res) => {
    const { author, title, content, date, email, image, author_image, tags, likes } = req.body;

    try {
      const result = await ForumData.create({
        author,title,
        content, likes,
        date,email, tags,
        image,author_image,
      });

      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error.message);
    }
};
export const updateForum = async (req, res) => {
    const {} = req.body
    try {
        res.status(200).json({ result: result });
    } catch (error) {
        console.log(error.message);
    }
};
export const deleteForum = async (req, res) => {
    const { id } = req.body;
    const _id = ObjectId(id);

    try {
      const result = await ForumData.deleteOne(_id);

      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error.message);
    }
};