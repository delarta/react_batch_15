import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router";

function Home() {
  const posts = useSelector((state) => state.posts.data);
  const todos = useSelector((state) => state.todos.data);
  const loggedIn = useSelector((state) => state.accounts.loggedIn);

  const history = useHistory();

  useEffect(() => {
    if (!loggedIn) {
      history.push("/login");
    }
  }, [loggedIn]);

  return (
    <Container style={{ paddingTop: "65px" }}>
      <h1>Welcome Home</h1>

      <h2>Posts Data</h2>
      <ListGroup>
        {posts.map((post) => (
          <ListGroupItem key={post.id}>{post.title}</ListGroupItem>
        ))}
      </ListGroup>
      <br />
      <br />
      <h2>Todos Data</h2>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>{todo.task}</ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Home;
