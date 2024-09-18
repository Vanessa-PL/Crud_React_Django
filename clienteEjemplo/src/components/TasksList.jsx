import { useEffect, useState } from "react";
import { getAllTask } from "../api/Tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
  const [tasks, setTasks] = useState([]); //Las variables en react se crean con el useState

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTask();
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
