import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useState } from "react";
import { Input } from "antd";

Input;
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="Search todos"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredTodos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
