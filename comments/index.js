const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(6).toString("hex");
  const comments = commentsByPostId[req.params.id] || [];
  const { content } = req.body;
  comments.push({ commentId, content });
  commentsByPostId[req.params.id] = comments;
  console.log(comments);
  res.status(201).send(commentsByPostId[commentId]);
});

app.listen(5001, () => {
  console.log("Comments Listening on 5001");
});
