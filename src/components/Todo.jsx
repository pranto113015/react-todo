import React, { useState } from "react";

const Todo = ({ todo }) => {
  const [isEditing, setEditing] = useState(false);

  const toContent = isEditing ? (
    <>
      <input type="text" />
      <button>Save</button>
    </>
  ) : (
    <>
      {todo.title}
      <button onClick={() => setEditing(true)}>Edit</button>{" "}
    </>
  );

  return (
    <>
      <input type="checkbox" />
      {toContent}
      <button>Delete</button>
    </>
  );
};

export default Todo;
