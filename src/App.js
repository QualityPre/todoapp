import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const dummyTasks = [
    {
      id: 1,
      text: "Have a poo",
      completed: true,
    },
    {
      id: 2,
      text: "Shave",
      completed: false,
    },
    {
      id: 3,
      text: "Brush teeth",
      completed: true,
    },
    {
      id: 4,
      text: "Read a book",
      completed: true,
    },
  ];

  const [tasks, setTasks] = useState(dummyTasks);

  return (
    <div className="container">
      <Header title="To Do List App" />
      <Tasks data={tasks} />
    </div>
  );
}

export default App;
