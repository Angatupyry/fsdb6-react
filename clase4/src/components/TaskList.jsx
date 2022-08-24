import Task from "./Task";
import { useState } from "react";

const TaskList = () => {
  const tareasIniciales = [
    {
      id: 1,
      title: "Tomar agua",
    },
    {
      id: 2,
      title: "Estudiar React",
    },
    {
      id: 3,
      title: "Tocar la nariz de mi mascota",
    },
  ];

  const [tasks, setTask] = useState(tareasIniciales);

  const addTask = () => {
    const nuevaTarea = { id: Math.random(), title: "Nueva tarea" };
    const nuevoArrayDeTareas = [...tasks, nuevaTarea];
    setTask(nuevoArrayDeTareas);
  };

  return (
    <div className="taskList">
      {tasks.map((item) => (
        <Task task={item} key={item.id} />
      ))}
      <button onClick={addTask} className="addTask">
        Add task
      </button>
    </div>
  );
};

export default TaskList;
