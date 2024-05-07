import { useCallback, useEffect, useState } from "react";

import "./App.css";
import Post from "./Post";

function App() {
  const [timer, setTimer] = useState(0);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = useCallback(
    (e) => {
      let { name, value } = e.target;
      setTitle({ ...title, [name]: value });
    },
    [title]
  );

  const handleClick = useCallback(() => {
    if (title.title && title.body) {
      const newPost = { ...title, id: Date.now(), verifyPost: false };
      setPosts([...posts, newPost]);
      setTitle({
        title: "",
        body: "",
      });
    }
  }, [title, posts]);

  const handleToggle = useCallback((id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
      )
    );
  }, []);

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <input
        type="text"
        name="title"
        placeholder="Enter title"
        value={title.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="body"
        placeholder="Enter body"
        value={title.body}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add Post</button>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          verifyPost={post.verifyPost}
          onToggleVerify={handleToggle}
        />
      ))}
    </div>
  );
}

export default App;
