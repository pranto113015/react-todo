import React, { useState } from "react";

const Addtodo = () => {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add</button>
    </>
  );
};

export default Addtodo;
