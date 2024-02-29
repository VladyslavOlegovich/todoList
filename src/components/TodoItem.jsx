/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: todo.id, completed: !todo.completed }));
  };
  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };
  return (
    <div>
      <div className="task">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCompleteClick}
        />
        <p>
          <span className="todo-title">{todo.title}</span>: {todo.description}
        </p>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
