import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleToggle ,handleFilter }) => {
  return (
    <><div>
      {toDoList.map((toDo) => {
        return <ToDo toDo={toDo} handleToggle={handleToggle} handleFilter={handleFilter}/>;
      })}
      <button onClick={handleFilter}>Clear Button</button>
      </div>
    </>
  );
};

export default ToDoList;
