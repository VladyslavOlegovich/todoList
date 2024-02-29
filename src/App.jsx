import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import CompletedTodos from "./components/CompletedTodos";
import IncompletedTodos from "./components/IncompletedTodos";

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              List
            </NavLink>
          </li>
          <li>
            <NavLink to="/form" activeclassname="active">
              Create Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/completed" activeclassname="active">
              Completed Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to="/incompleted" activeclassname="active">
              Not Completed Tasks
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/form" element={<AddTodoForm />} />
        <Route path="/completed" element={<CompletedTodos />} />
        <Route path="/incompleted" element={<IncompletedTodos />} />
      </Routes>
    </>
  );
}

export default App;
