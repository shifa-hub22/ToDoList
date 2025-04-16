import React, { useState } from "react";
function ToDolist() {
  const [task, setTask] = useState([
    "Eat breakfast",
    "take Shower",
    "go to office",
  ]);

  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function deleteTask(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTasks = [...task]; //store current taks into this
      [updatedTasks[index], updatedTasks[index + 1]] =
        //swapping of task at curret index with next task
        [updatedTasks[index + 1], updatedTasks[index]];
      setTask(updatedTasks);
    }
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="add-button" onClick={addTask}>
              Add
            </button>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>

            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>

            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}
export default ToDolist;
