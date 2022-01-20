const Task = ({ data }) => {
  return (
    <div className="task">
      <h3>{data.text}</h3>
    </div>
  );
};

export default Task;
