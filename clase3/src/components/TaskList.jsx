import Task from "./Task";

const TaskList = () => {
  const tasks = [
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

  return tasks.map((item) => <Task task={item} key={item.id} />);
};

export default TaskList;
