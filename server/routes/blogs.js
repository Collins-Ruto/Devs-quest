import express from "express";

import {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
} from "../controllers/blogsCont.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/id/:id", getBlog);
router.post("/", createBlog);
router.put("/editblog", updateBlog);
router.delete("/deleteblog", deleteBlog);

export default router;
