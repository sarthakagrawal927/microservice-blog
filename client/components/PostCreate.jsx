import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    if (title.length > 0)
      await axios.post("http://localhost:4000/posts", {
        title,
      });
    setTitle("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label>Title</label>
        <input
          type='text'
          className='form-control'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default PostCreate;
