import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const dataDir = process.env.DATA_DIR || path.join(__dirname, "..", "..", "data-issuance");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
const dbPath = path.join(dataDir, "issuance.db");
const db = new Database(dbPath);

db.exec(`CREATE TABLE IF NOT EXISTS credentials (
  id TEXT PRIMARY KEY,
  payload TEXT,
  worker TEXT,
  issuedAt TEXT
)`);

export default db;
