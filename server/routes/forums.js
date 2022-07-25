import express from "express";

import {
  getForums,
  getForum,
  createForum,
  deleteForum,
  updateForum,
} from "../controllers/forumsCont.js";

const router = express.Router();

router.get("/", getForums);
router.get("/id/:id", getForum);
router.post("/", createForum);
router.put("/", updateForum);
router.delete("/", deleteForum);

export default router;
