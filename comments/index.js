const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(6).toString("hex");
  const comments = commentsByPostId[req.params.id] || [];
  const { content } = req.body;
  comments.push({ commentId, content });
  commentsByPostId[req.params.id] = comments;

  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: { id: commentId, content, postId: req.params.id },
  });

  res.status(201).send(commentsByPostId[commentId]);
});

app.post("/events", async (req, res) => {
  console.log("Received events", req.body.type);
  res.send({});
});

app.listen(4001, () => {
  console.log("Comments Listening on 4001");
});
