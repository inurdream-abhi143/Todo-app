import { useState } from "react";
const InputField = (props) => {
  const [inputTask, setInpuTask] = useState("");

  // useEffect(() => {}, []);

  const addTask = (e) => {
    e.preventDefault();

    props.addList(inputTask);
    setInpuTask("");
  };
  return (
    <>
      <form>
        <label htmlFor="text-field"></label>
        <input
          type="text"
          placeholder="Enter the Task"
          className="add-task"
          value={inputTask}
          onChange={(e) => setInpuTask(e.target.value)}
        ></input>
        <button
          className="addbtn"
          onClick={(e) => addTask(e)}
          disabled={inputTask.trim() === ""}
        >
          +
        </button>
      </form>
    </>
  );
};

export default InputField;
