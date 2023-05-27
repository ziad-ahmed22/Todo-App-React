const Controls = (props) => {
  const btns = document.querySelectorAll(".btns .btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    });
  });

  return (
    <div>
      <span className="btn active" onClick={props.showAll}>
        All Tasks
      </span>
      <span className="btn " onClick={props.showActive}>
        Active Tasks
      </span>
      <span className="btn " onClick={props.showDone}>
        Finished Tasks
      </span>
      {props.tasksArr.length >= 2 && (
        <div
          onClick={props.delAllTasks}
          style={
            props.show === "all" ? { display: "block" } : { display: "none" }
          }
        >
          Delete All Tasks
        </div>
      )}
    </div>
  );
};

export default Controls;
