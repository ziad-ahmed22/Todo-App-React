import { useState } from "react";
import shortid from "shortid";

const TodoForm = (props) => {
  const [text, setText] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (text !== "" && text !== " " && text !== "  ") {
      props.addTask({
        id: shortid.generate(),
        text: text,
        completed: false,
        time:
          new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString(),
      });
    }
    setText("");
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        disabled={props.show !== "all" ? true : false}
        placeholder={
          props.show !== "all"
            ? "must be in all tasks tab to add task"
            : "Add Task"
        }
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="submit" value="Add Task" />
    </form>
  );
};

export default TodoForm;
