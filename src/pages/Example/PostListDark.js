import React, { useEffect, useState } from "react";
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

function PostListDark() {
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
    <div className="mt-4" style={{background:"#131313"}}>
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
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PostListDark;
