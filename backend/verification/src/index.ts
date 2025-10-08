import express from "express";
import bodyParser from "body-parser";
import verifyRouter from "./routes/verify";
const app = express();
app.use(bodyParser.json());

app.use("/", verifyRouter);

app.get("/health", (_, res) => res.json({ status: "ok", worker: process.env.WORKER_ID || require("os").hostname() }));

const port = parseInt(process.env.PORT || "3002");
app.listen(port, () => {
  console.log(`Verification service listening on ${port}, worker=${process.env.WORKER_ID || require("os").hostname()}`);
});

export default app;
