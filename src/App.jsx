import React, { useState } from "react";
import "./App.css";
import Addtodo from "./components/Addtodo";
import Todolist from "./components/Todolist";
import initialTodos from "./data/initialtodos";
import getNextTodoIds from "./utils/getNextTodoIds.js";

function App() {
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
    <>
      <h1>React Todo App</h1>
      <Addtodo onAddTodo={handleAddTodo} />
      <Todolist
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;
