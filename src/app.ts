import express from "express";
import bodyParser from "body-parser";
import router from "./router";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
  });
});

app.use("/password", router);

export default app;
