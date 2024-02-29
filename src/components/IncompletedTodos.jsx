import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const IncompletedTodos = () => {
  const incompletedTodos = useSelector((state) => state.todos).filter(
    (todo) => todo.completed !== true
  );

  return (
    <div>
      <ul>
        {incompletedTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default IncompletedTodos;
