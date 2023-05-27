import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import Controls from "./Controls";
import "./todo.css";

const Todo = () => {
  let [tasksArr, setTasksArr] = useState([]);

  // Get From Storage
  useEffect(() => {
    localStorage.getItem("todo-tasks") &&
      setTasksArr(JSON.parse(localStorage.getItem("todo-tasks")));
  }, []);

  const addTask = (task) => {
    setTasksArr([task, ...tasksArr]);
    // Storage
    localStorage.setItem("todo-tasks", JSON.stringify([task, ...tasksArr]));
  };

  const deleteTask = (id) => {
    setTasksArr(tasksArr.filter((task) => task.id !== id));
    // Storage
    localStorage.setItem(
      "todo-tasks",
      JSON.stringify(tasksArr.filter((task) => task.id !== id))
    );
  };

  const toggleCompleted = (id) => {
    setTasksArr(
      tasksArr.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
    // Toogle Complete To Storage
    const ar = JSON.parse(localStorage.getItem("todo-tasks")).map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    localStorage.setItem("todo-tasks", JSON.stringify(ar));
  };

  const [show, setShow] = useState("all");
  if (show === "active") {
    tasksArr = tasksArr.filter((task) => !task.completed);
  }
  if (show === "completed") {
    tasksArr = tasksArr.filter((task) => task.completed);
  }

  const delAllTasks = () => {
    setTasksArr([]);
    localStorage.removeItem("todo-tasks");
  };

  return (
    <div className="todo-container">
      <header>
        <h1>To Do</h1>
        <span>
          {tasksArr.length} {tasksArr.length > 1 ? "Tasks" : "Task"}
        </span>
      </header>

      <TodoForm addTask={addTask} show={show} />

      <div className="tasks-container">
        {!tasksArr.length && <h3 className="notasks">No Tasks</h3>}

        {tasksArr.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onCompleted={() => toggleCompleted(task.id)}
          />
        ))}
      </div>

      <div className="btns">
        <Controls
          showActive={() => setShow("active")}
          showDone={() => setShow("completed")}
          showAll={() => setShow("all")}
          delAllTasks={delAllTasks}
          show={show}
          tasksArr={tasksArr}
        />
      </div>
    </div>
  );
};

export default Todo;
