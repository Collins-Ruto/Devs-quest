import mongoose from "mongoose";
import HackData from "../models/hackData.js";

const ObjectId = mongoose.Types.ObjectId;

export const getHacks = async (req, res) => {
    try {
        const result = await HackData.find();
      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error.message);
    }
};
export const getHack = async (req, res) => {
    
    const {id} = req.body;
    const _id = ObjectId(id);

    try {
        const result = await HackData.findById(_id);
      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error.message);
    }onsole.log(error.message);
};

export const createHack = async (req, res) => {
    const { author, title, content, date, email, image, author_image } = req.body;

    try {
      const result = await HackData.create({
        author, title, 
        content, date, email, 
        image, author_image 
    });

      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error.message);
    }
};

export const updateHack = async (req, res) => {
    const {} = req.body;
    try {
      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error.message);
    }
};
export const deleteHack = async (req, res) => {
    const { id } = req.body;
    const _id = ObjectId(id);

    try {
      const result = await HackData.delete(_id);

      res.status(200).json({ result: result });
    } catch (error) {
      console.log(error.message);
    }
};