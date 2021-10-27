import React, { useEffect, useState } from "react";

function PostList() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    // HTTP METHOD: GET, POST, PUT, DELETE
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          title,
          body,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await response.json();

      setPosts([data, ...posts]);
    } catch (err) {
      console.log(err);
      setErrMessage("Post failed to create");
    }
  };

  return (
    <div>
      <h1>Blog Posts</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="body"
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <br />
        <button>Add New Post</button>
        <br />
        <br />
      </form>

      {errMessage && <p style={{ color: "red" }}>{errMessage}</p>}

      <div>
        {posts.map((post) => (
          <div
            style={{
              padding: "20px",
              marginBottom: "10px",
              border: "1px solid #dadada",
            }}
            key={post.id}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
