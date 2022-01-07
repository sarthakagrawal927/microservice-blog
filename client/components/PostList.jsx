import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
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
            return (
              <Post
                id={post.id}
                title={post.title}
                key={index}
                comments={post.comments}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PostList;
