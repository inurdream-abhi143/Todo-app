import { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  };
  const handelDelete = (taskIndex) => {
    const newTaskList = listTodo.filter((item, index) => index !== taskIndex);
    setListTodo(newTaskList);
  };
  return (
    <>
      <div className="container">
        <div className="Todo-continer">
          <InputField addList={addList} />
          <h2 className="heading">Task Lists </h2>
          <span className="border"></span>

          {listTodo.map((itmes, index) => {
            return (
              <TodoList
                key={index}
                items={itmes}
                deleteItem={handelDelete}
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
