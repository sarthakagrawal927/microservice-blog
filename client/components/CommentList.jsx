import React, { useEffect, useState } from "react";
import axios from "axios";

const PostList = ({ postId, comments }) => {
  return (
    <div className='container'>
      <div className='row'>
        {comments &&
          comments.map((comment, index) => {
            let content = comment.content;
            if (comment.status === "pending") content = "Awaiting Moderation";
            if (comment.status === "rejected") content = "Comment rejected";
            return <p key={index}>{content}</p>;
          })}
      </div>
    </div>
  );
};

export default PostList;
