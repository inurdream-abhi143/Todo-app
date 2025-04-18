import { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [inputTask, setInputTask] = useState("");

  let addList = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updateList = [...listTodo];
      updateList[editIndex] = inputTask;
      setListTodo(updateList);
      setEditIndex(null);
    } else {
      setListTodo([...listTodo, inputTask]);
    }
    setEditIndex(null);
  };
  const handelDelete = (taskIndex) => {
    const newTaskList = listTodo.filter((_, index) => index !== taskIndex);
    setListTodo(newTaskList);
  };
  const handelEdit = (taskIndex) => {
    setInputTask(listTodo[taskIndex]);
    setEditIndex(taskIndex);
  };
  return (
    <>
      <div className="container">
        <div className="Todo-continer">
          <InputField
            addList={addList}
            inputTask={inputTask}
            setInputTask={setInputTask}
            editIndex={editIndex}
          />
          <h2 className="heading">Task Lists </h2>
          <span className="border"></span>

          {listTodo.map((itmes, index) => {
            return (
              <TodoList
                key={index}
                items={itmes}
                deleteItem={handelDelete}
                EditItem={handelEdit}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
