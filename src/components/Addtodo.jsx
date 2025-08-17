import React, { useState } from "react";

const Addtodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTodo(title);
          setTitle("");
        }}
      >
        Add
      </button>
    </>
  );
};

export default Addtodo;
