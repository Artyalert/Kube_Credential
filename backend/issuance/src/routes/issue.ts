import { Router } from "express";
import db from "../db";
const router = Router();

router.post("/issue", (req, res) => {
  const cred = req.body;
  if (!cred || !cred.id) return res.status(400).json({ error: "missing id" });

  const existing = db.prepare("SELECT * FROM credentials WHERE id = ?").get(cred.id);
  const worker = process.env.WORKER_ID || require("os").hostname();
  const now = new Date().toISOString();

  if (existing) {
    return res.status(409).json({
      message: `credential already issued by ${existing.worker}`,
      worker: existing.worker,
      issuedAt: existing.issuedAt
    });
  }

  db.prepare("INSERT INTO credentials (id, payload, worker, issuedAt) VALUES (?, ?, ?, ?)")
    .run(cred.id, JSON.stringify(cred), worker, now);

  return res.json({ message: "credential issued", worker, issuedAt: now });
});

export default router;
