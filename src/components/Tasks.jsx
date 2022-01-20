import Task from "./Task";

const Tasks = ({ data }) => {
  return (
    <>
      {data.map((task) => (
        <Task key={task.id} data={task} />
      ))}
    </>
  );
};

export default Tasks;
