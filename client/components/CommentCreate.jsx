import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label>content</label>
        <input
          type='content'
          className='form-control'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default CommentCreate;
