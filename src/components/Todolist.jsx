import React, { useState } from "react";
import initialTodos from "../data/initialtodos";
import Todo from "./Todo";
import getNextTodoIds from "../utils/getNextTodoids";

const Todolist = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleChangeTodo = (todo) => {
    const changedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return {
          ...t,
          title: todo.title,
          done: todo.done,
        };
      }
      return t;
    });
    setTodos(changedTodos);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: getNextTodoIds(todos),
        title,
        done: false,
      },
    ]);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo
            todo={todo}
            onChangeTodo={handleChangeTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
