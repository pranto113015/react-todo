import "./App.css";
import Addtodo from "./components/Addtodo";
import Todolist from "./components/Todolist";

function App() {
  return (
    <>
      <h1>React Todo App</h1>
      <Addtodo />
      <Todolist />
    </>
  );
}

export default App;
