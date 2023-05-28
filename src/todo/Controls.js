import { useState } from "react";

const Controls = (props) => {
  const [activeBtn, setActiveBtn] = useState(1);

  const allTasks = () => {
    props.showAll();
    setActiveBtn(1);
  };
  const activeTasks = () => {
    props.showActive();
    setActiveBtn(2);
  };
  const finishedTasks = () => {
    props.showDone();
    setActiveBtn(3);
  };

  return (
    <>
      <div className="controls">
        <span
          className={activeBtn === 1 ? "btn active" : "btn"}
          onClick={allTasks}
        >
          All Tasks
        </span>
        <span
          className={activeBtn === 2 ? "btn active" : "btn"}
          onClick={activeTasks}
        >
          Active Tasks
        </span>
        <span
          className={activeBtn === 3 ? "btn active" : "btn"}
          onClick={finishedTasks}
        >
          Finished Tasks
        </span>
      </div>
      {props.tasksArr.length >= 2 && (
        <div
          className="del-all"
          onClick={props.delAllTasks}
          style={
            props.show === "all" ? { display: "block" } : { display: "none" }
          }
        >
          Delete All Tasks
        </div>
      )}
    </>
  );
};

export default Controls;
