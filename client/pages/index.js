import Head from "next/head";
import Image from "next/image";
import PostList from "../components/PostList";
import styles from "../styles/Home.module.css";
import PostCreate from "./../components/PostCreate";

export default function Home() {
  return (
    <div className='container'>
      <h1>Create Post</h1>
      <PostCreate />
      <PostList />
    </div>
  );
}
