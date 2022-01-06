import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");

    console.log(res.data);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        {posts &&
          Object.values(posts).map((post, index) => {
            return <Post id={post.id} title={post.title} key={index} />;
          })}
      </div>
    </div>
  );
};

export default PostList;
