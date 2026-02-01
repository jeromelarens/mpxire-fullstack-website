import Visitor from "../models/Visitor.js";

export default async function trackVisitor(req, res, next) {
  try {
    await Visitor.create({
      ip: req.ip,
      userAgent: req.headers["user-agent"],
    });
  } catch (err) {
    console.log("Visitor log failed");
  }
  next();
}