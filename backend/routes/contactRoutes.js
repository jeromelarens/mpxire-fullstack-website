import express from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const msg = await ContactMessage.create(req.body);
    res.status(201).json(msg);
  } catch (err) {
    res.status(500).json({ message: "Failed to save message" });
  }
});

export default router;