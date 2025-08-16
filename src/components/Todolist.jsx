import React, { useState } from "react";
import initialTodos from "../data/initialtodos";
import Todo from "./Todo";

const Todolist = () => {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
