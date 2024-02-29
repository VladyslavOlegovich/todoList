/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { useState } from "react";
import { Input } from "antd";

const AddTodoForm = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: taskName,
        description: taskDescription,
      })
    );
    setTaskName("");
    setTaskDescription("");
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder="task name"
        className="custom-input"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />
      <Input
        placeholder="task description"
        className="custom-input"
        value={taskDescription}
        onChange={(event) => setTaskDescription(event.target.value)}
      />
      <button className="addBtn" type="submit">
        Add todo
      </button>
    </form>
  );
};

export default AddTodoForm;
