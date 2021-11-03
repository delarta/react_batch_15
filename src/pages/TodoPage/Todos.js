import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  ListGroup,
  ListGroupItem,
  Button,
  Input,
  Row,
  Col,
  Container,
} from "reactstrap";

function Todos() {
  const todosStore = useSelector((state) => state.todos);
  const url = "http://localhost:3004/todolist";
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [targetId, setTargetId] = useState("");
  const [updatedName, setUpdatedName] = useState("");

  const dispatch = useDispatch();

  useEffect(async () => {
    if (todosStore.length === 0) {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setTodos(data);

        dispatch({ type: "GET_TODOS", payload: data });
      } catch (error) {
        console.log(error);
      }
    } else {
      setTodos(todosStore);
    }
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    if (!taskName) return;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          task: taskName,
          id: todos[todos.length - 1].id + 1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      dispatch({ type: "ADD_TODO", payload: data });

      setTodos([...todos, data]);
      setTaskName("");
    } catch (error) {
      alert("Error when adding a task");
    }
  };

  const handleDelete = async (todoId) => {
    try {
      const response = await fetch(`${url}/${todoId}`, {
        method: "DELETE",
      });

      await response.json();

      dispatch({ type: "DELETE_TODO", payload: todoId });

      setTodos([...todos.filter((todo) => todo.id !== todoId)]);
    } catch (error) {
      alert("Failed to delete task");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}/${targetId}`, {
        method: "PUT",
        body: JSON.stringify({
          id: Number(targetId),
          task: updatedName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (Object.keys(data).length === 0) {
        throw Error();
      }

      dispatch({
        type: "UPDATE_TODO",
        payload: { data: data, id: targetId },
      });

      setTodos([
        ...todos.map((todo) => {
          if (todo.id === Number(targetId)) {
            return { ...todo, ...data };
          } else {
            return todo;
          }
        }),
      ]);
    } catch (error) {
      alert("Update Failed!");
    }
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
