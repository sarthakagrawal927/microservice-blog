import React, { useEffect, useState } from "react";
import axios from "axios";

const PostList = ({ postId, comments }) => {
  return (
    <div className='container'>
      <div className='row'>
        {comments &&
          comments.map((comment, index) => {
            return <p key={index}>{comment.content}</p>;
          })}
      </div>
    </div>
  );
};

export default PostList;
