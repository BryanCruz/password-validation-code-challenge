import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
  });
});

export default app;
