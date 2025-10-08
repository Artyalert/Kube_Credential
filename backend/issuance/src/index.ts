import express from "express";
import bodyParser from "body-parser";
import issueRouter from "./routes/issue";
const app = express();
app.use(bodyParser.json());

app.use("/", issueRouter);

app.get("/health", (_, res) => res.json({ status: "ok", worker: process.env.WORKER_ID || require("os").hostname() }));

const port = parseInt(process.env.PORT || "3001");
app.listen(port, () => {
  console.log(`Issuance service listening on ${port}, worker=${process.env.WORKER_ID || require("os").hostname()}`);
});

export default app;
