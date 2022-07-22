import mongoose from "mongoose";
import CollabData from "../models/collabData.js";

const ObjectId = mongoose.Types.ObjectId;

export const getCollabs = async (req, res) => {
    try {
        const result = await CollabData.find();
        res.status(200).json({ result: result });
    } catch (error) {
        console.log(error.message);
    }
};
export const getCollab = async (req, res) => {

    const {id} = req.body;
    const _id = ObjectId(id);

    try {
        const result = await CollabData.findById(_id);
      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error.message);
    }
};
export const createCollab = async (req, res) => {
    const {author, title, github, content, date, email, image} = req.body;
    
    try {
        const result = await CollabData.create({author, title, github, content, date, email, image})

      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error.message);
    }
};
export const updateCollab = async (req, res) => {
    const {} = req.body;
    try {
      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error.message);
    }
};
export const deleteCollab = async (req, res) => {
    const {id} = req.body;
    const _id = ObjectId(id);

    try {
        const result = await CollabData.delete(_id);

      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error.message);
    }
};