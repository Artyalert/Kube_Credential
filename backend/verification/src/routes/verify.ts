import { Router } from "express";
import db from "../db";
const router = Router();

router.post("/verify", (req, res) => {
  const cred = req.body;
  if (!cred || !cred.id) return res.status(400).json({ error: "missing id" });

  const found = db.prepare("SELECT * FROM credentials WHERE id = ?").get(cred.id);
  const worker = process.env.WORKER_ID || require("os").hostname();
  const now = new Date().toISOString();

  if (found) {
    return res.json({
      valid: true,
      worker,
      issuedAt: found.issuedAt,
      verifiedAt: now
    });
  }

  return res.status(404).json({ valid: false, message: "credential not found" });
});

export default router;
