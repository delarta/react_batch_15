import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Input,
  Form,
  FormGroup,
  Label,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

function PostList() {
  const url = process.env.REACT_APP_JSONPLACEHOLDER_API

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    axios.get(`${url}posts`).then((response) => setPosts(response.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url, {
        title,
        body,
        userId: 1,
      });

      setPosts([response.data, ...posts]);
    } catch (err) {
      console.log(err);
      setErrMessage("Post failed to create");
    }
  };

  const handleDelete = (postId) => {
    axios
      .delete(`${url}/posts/${postId}`)
      .then(() => {
        setPosts([...posts.filter((post) => post.id !== postId)]);
        alert("Post deleted!");
      });
  };

  return (
    <div className="mt-4">
      <Card className="mb-4">
        <CardBody>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <FormGroup>
              <Label>Title</Label>
              <Input type="text" onChange={(e) => setTitle(e.target.value)} />
            </FormGroup>

            <FormGroup>
              <Label>Body</Label>
              <Input type="text" onChange={(e) => setBody(e.target.value)} />
            </FormGroup>
            <Button color="primary">Add New Post</Button>
          </Form>
        </CardBody>
      </Card>

      {errMessage && <p style={{ color: "red" }}>{errMessage}</p>}

      <h2>Blog Posts</h2>

      <div>
        {posts.map((post) => (
          <Card className="mb-3">
            <CardBody>
              <CardTitle tag="h4">{post.title}</CardTitle>
              <CardText>{post.body}</CardText>
              <Button color="danger" onClick={() => handleDelete(post.id)}>
                Delete
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PostList;
