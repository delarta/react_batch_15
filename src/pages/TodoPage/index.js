import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button,
  Input,
  Row,
  Col,
  Container,
} from "reactstrap";

import {
  updateTodoStart,
  addTodoStart,
  deleteTodoStart,
  getTodosStart,
} from "../../redux/actions/todosAction";

function Todos() {
  const todosStore = useSelector((state) => state.todos.data);
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [targetId, setTargetId] = useState("");
  const [updatedName, setUpdatedName] = useState("");

  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.accounts.loggedIn);

  const history = useHistory();

  useEffect(() => {
    if (!loggedIn) {
      history.push("/login");
    }
  }, [loggedIn]);

  useEffect(async () => {
    if (todosStore.length === 0) {
      dispatch(getTodosStart());
    } else {
      setTodos(todosStore);
    }
  }, [todosStore]);

  const handleClick = async (e) => {
    e.preventDefault();
    if (!taskName) return;
    dispatch(addTodoStart(taskName));
  };

  const handleDelete = async (todoId) => {
    dispatch(deleteTodoStart(todoId));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch(updateTodoStart(updatedName, Number(targetId)));
  };

  return (
    <Container style={{ paddingTop: "65px" }}>
      <h1>Todos</h1>

      <form onSubmit={(e) => handleClick(e)}>
        <Row className="mb-5">
          <Col xs={8}>
            <Input
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Write task name"
            />
          </Col>
          <Col xs={4}>
            <Button type="submit" block color="primary">
              Add Task
            </Button>
          </Col>
        </Row>
      </form>

      <form onSubmit={(e) => handleUpdate(e)}>
        <Row className="mb-5">
          <Col xs={2}>
            <Input
              value={targetId}
              onChange={(e) => setTargetId(e.target.value)}
              type="number"
              placeholder="Id"
            />
          </Col>
          <Col xs={6}>
            <Input
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
              placeholder="Write task name"
            />
          </Col>
          <Col xs={4}>
            <Button type="submit" block color="primary">
              Update Task
            </Button>
          </Col>
        </Row>
      </form>

      <ListGroup>
        {todos.map((todo) => (
          <ListGroupItem
            className="d-flex justify-content-between align-items-center"
            key={todo.id}
          >
            <div>{todo.task}</div>
            <Button
              size="sm"
              color="danger"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Todos;
