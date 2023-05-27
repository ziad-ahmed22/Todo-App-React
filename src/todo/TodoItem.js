import { AiOutlineClose } from "react-icons/ai";

const TodoItem = ({ task, onDelete, onCompleted }) => {
  return (
    <div className={task.completed ? "task done" : "task"}>
      <div
        className={task.completed ? "text done" : "text"}
        onClick={onCompleted}
      >
        {task.text}
      </div>
      <div className="close" onClick={onDelete}>
        <AiOutlineClose />
      </div>
      <div className="foot">
        <div className="state">{task.completed ? "Finished" : ""}</div>
        <div className="time">{task.time}</div>
      </div>
    </div>
  );
};

export default TodoItem;
