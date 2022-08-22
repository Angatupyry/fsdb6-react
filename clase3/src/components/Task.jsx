import "./Task.css";
const Task = ({ task }) => {
  return (
    <div className="task">
      Task: {task.id} {task.title}
    </div>
  );
};

export default Task;
