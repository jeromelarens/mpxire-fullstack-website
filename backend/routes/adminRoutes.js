import express from "express";
import ContactMessage from "../models/ContactMessage.js";
import Visitor from "../models/Visitor.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

/* =======================
   CONTACT MESSAGES
======================= */
router.get("/messages", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch messages" });
  }
});

/* =======================
   VISITORS LIST  ✅ (THIS WAS MISSING)
======================= */
router.get("/visitors", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const visitors = await Visitor.find().sort({ visitedAt: -1 });
    res.json(visitors);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch visitors" });
  }
});

export default router;