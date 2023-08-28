import { useState } from "react";
import data from "../MOCK_DATA.json";
import Header from "./Header";
import ToDoList from "./ToDoList";
import "../App.css";
import RemovedArray from "./RemovedArray";
import { Link } from "react-router-dom";

const Home = () => {
  const [toDoList, settoDoList] = useState(data);

  const [RemovedList ,setRemovedList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, Complete: !task.Complete }
        : { ...task };
    });
    settoDoList(mapped);
  };
  const handleFilter = () => {
    const filteredArray = toDoList.filter((task) => !task.Complete);
    settoDoList(filteredArray);
  };

  return (
    <>
    
      <Header />
      <form>
        <input type="text" id="task" name="task"></input>
        <button type="submit">Create Task</button>
      </form>
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />

      {/* <RemovedArray/>
      <h2>Removed Array elements</h2>

      <RemovedArray RemovedList={RemovedList}/> */}
    </>
  );
};

export default Home;
