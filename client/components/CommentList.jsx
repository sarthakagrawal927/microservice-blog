import React, { useEffect, useState } from "react";
import axios from "axios";

const PostList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:5001/posts/${postId}/comments`,
    );
    console.log(res.data);
    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

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
