import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Button, Input, Row, Col } from "reactstrap";

function Todos() {
  const url = "http://localhost:3004/todolist";
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState("");

  useEffect(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(taskName);

    // Falsy values: 0, -0, NaN, '', null, undefined,
    // [], {} !== false

    if (!taskName) return;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          task: taskName,
          id: todos.length + 1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      setTodos([...todos, data]);
      setTaskName('')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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

      <ListGroup>
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>{todo.task}</ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default Todos;
