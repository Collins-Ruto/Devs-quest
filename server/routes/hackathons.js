import express from "express";

import {
  getHacks,
  getHack,
  createHack,
  deleteHack,
  updateHack,
} from "../controllers/hacksCont.js";

const router = express.Router();

router.get("/", getHacks);
router.get("/id/:id", getHack);
router.post("/", createHack);
router.put("/edithack", updateHack);
router.delete("/", deleteHack);

export default router;
