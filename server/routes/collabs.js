import express from "express";

import {
  getCollabs,
  getCollab,
  createCollab,
  deleteCollab,
  updateCollab,
} from "../controllers/collabsCont.js";

const router = express.Router();

router.get("/", getCollabs);
router.get("/id/:id", getCollab);
router.post("/new", createCollab);
router.put("/update", updateCollab);
router.delete("/delete", deleteCollab);

export default router;
