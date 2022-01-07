import React from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const Post = ({ id, title, comments }) => {
  return (
    <div key={id} className='card col-lg-4' style={{ marginTop: "0.3rem" }}>
      <h3>{title}</h3>
      <CommentCreate postId={id} />
      <CommentList postId={id} comments={comments} />
    </div>
  );
};

export default Post;
