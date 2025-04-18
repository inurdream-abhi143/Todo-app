import { useState } from "react";
const InputField = (props) => {
  // useEffect(() => {}, []);

  const addTask = (e) => {
    e.preventDefault();

    props.addList(e);
    props.setInputTask("");
  };
  return (
    <>
      <form>
        <label htmlFor="text-field"></label>
        <input
          type="text"
          placeholder="Enter the Task"
          className="add-task"
          value={props.inputTask}
          onChange={(e) => props.setInputTask(e.target.value)}
        ></input>
        <button
          className="addbtn"
          onClick={(e) => addTask(e)}
          disabled={props.inputTask.trim() === ""}
        >
          {props.editIndex !== null ? "U" : "+"}
        </button>
      </form>
    </>
  );
};

export default InputField;
