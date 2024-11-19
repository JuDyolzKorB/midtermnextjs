import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);


  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
return(
  <div className="paul">
    <h1>
      TODO LIST
    </h1>
    <div className="taskinput">
    <input
          type="text"
          placeholder="Add a new task"
          value={task}
          className="border border-black"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask} className="buttonaddtask">
          Add Task
        </button>
      </div>
      <ul className="showtasks">
        
        {tasks.map((t) => (
          <li key={t.id}>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTaskCompletion(t.id)}
              />
              <span
                className={`${
                  t.completed ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {t.text}
              </span>
            </div>
            <button onClick={() => deleteTask(t.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div> 
)
}