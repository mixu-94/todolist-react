/** @format */

import React from "react";
import Todo from "./Todo";
import "./style.css";

const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => {
    return <Todo type="checkbox" key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
  });
};

export default TodoList;
