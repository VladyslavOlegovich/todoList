import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const CompletedTodos = () => {
  const completedTodos = useSelector((state) => state.todos).filter(
    (todo) => todo.completed === true
  );

  return (
    <div>
      <ul>
        {completedTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default CompletedTodos;
