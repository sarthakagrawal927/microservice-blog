const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

app.use(bodyParser.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(6).toString("hex");
  const comments = commentsByPostId[req.params.id] || [];
  const { content } = req.body;
  comments.push({ commentId, content });
  commentsByPostId[commentId] = comments;
  res.status(201).send(commentsByPostId[commentId]);
});

app.listen(5000, () => {
  console.log("Listening on 5k");
});
