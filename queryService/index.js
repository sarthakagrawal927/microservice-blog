const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", function (req, res) {
  const { type, data } = req.body;
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  } else if (type === "CommentCreated") {
    const { id, content, postId } = data;
    posts[postId].comments.push({ id, content });
  }
  console.log(posts);
  res.send({});
});

app.listen(4002, () => {
  console.log("Query Service Listening on 4002");
});