import mongoose from "mongoose";
import BlogData from "../models/blogData.js";

const ObjectId = mongoose.Types.ObjectId;

export const getBlogs = async (req, res) => {
    try {
        const result = await BlogData.find();
        res.status(200).json({ result: result });
    } catch (error) {
        console.log(error.message);
    }
};
export const getBlog = async (req, res) => {
    const { id } = req.body;
    const _id = ObjectId(id);

    try {
      const result = await BlogData.findById(_id);
      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error.message);
    }
};
export const createBlog = async (req, res) => {
    const { author, title, content, date, email, image, author_image } = req.body;

    try {
      const result = await BlogData.create({
        author, title, 
        content, date, 
        email, image, author_image 
    });

      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error.message);
    }
};
export const updateBlog = async (req, res) => {
    const {} = req.body
    try {
        res.status(200).json({ result: result });
    } catch (error) {
        console.log(error.message);
    }
};
export const deleteBlog = async (req, res) => {
    const { id } = req.body;
    const _id = ObjectId(id);

    try {
      const result = await BlogData.delete(_id);

      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error.message);
    }
};