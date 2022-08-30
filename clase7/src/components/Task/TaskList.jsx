import Task from "./Task";
import "./TaskList.css";
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
  const [newValue, setNewValue] = useState({
    id: "",
    title: "",
  });

  const handleIdInputChange = (e) => {
    setNewValue({ ...newValue, id: e.target.value });
  };

  const handleTitleInputChange = (e) => {
    setNewValue({ ...newValue, title: e.target.value });
  };

  /**
   * - Controlar con un if el componente. 
     - En addTask realizar un if id or title === empty return.
     - Mostrar un mensaje si algún input está vacío. 
     - Crear estado para manejar errores
   */
  const addTask = () => {
    /**
     * Setear el estado tasks
     */
    // 1 Declarando auxiliares
    const nuevaTarea = { id: newValue.id, title: newValue.title };
    const taskClone = [...tasks, nuevaTarea];
    setTask(taskClone);

    // 2 Seteo directo
    // setTask([...tasks, { id: Math.random, title: "Nueva tarea" }]);
  };

  return (
    <div className="taskList">
      {/* {tasks.map((item) => (
        <Task task={item} key={item.id} />
      ))} */}
      {tasks.map((item) => {
        return (
          <div className="task" key={item.id}>
            Task {item.id} {item.title}
          </div>
        );
      })}
      <div className="addTaskContainer">
        <div className="inputContainer">
          <input
            placeholder="id"
            name="id"
            value={newValue.id}
            onChange={handleIdInputChange}
          />
          {!newValue.id && (
            <span className="errorText">El id no puede ser vacío</span>
          )}
        </div>

        <div className="inputContainer">
          <input
            placeholder="task"
            name="task"
            value={newValue.title}
            onChange={handleTitleInputChange}
          />
        </div>

        <button onClick={addTask} className="addTask">
          Add task
        </button>
      </div>
    </div>
  );
};

export default TaskList;
