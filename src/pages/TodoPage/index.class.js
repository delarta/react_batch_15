import React, { useState, useEffect } from "react";

import { ListGroup, ListGroupItem, Container, Spinner } from "reactstrap";

import {
  getTodos,
  updateTodo,
  addTodo,
  deleteTodo,
} from "../../redux/actions/todosAction";

import { connect } from "react-redux";

class Todos extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.props.dispatch(getTodos());
  }

  componentDidUpdate() {
    console.log(this.props.todoStore);
  }

  render() {
    const { todos } = this.state;

    return (
      <Container style={{ paddingTop: "65px" }}>
        <h1>TODO LIST</h1>
        <ListGroup>
          {todos.map((todo) => (
            <ListGroupItem
              className="d-flex justify-content-between align-items-center"
              key={todo.id}
            >
              <div>{todo.task}</div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoStore: state.todos.data,
  };
};

export default connect(mapStateToProps)(Todos);
