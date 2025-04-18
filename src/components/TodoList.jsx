import react, { useState } from "react";

const TodoList = (props) => {
  const [check, setCheck] = useState(false);
  const delteTask = (e) => {
    e.preventDefault();

    props.deleteItem(props.index);
  };

  const completeTask = (e) => {
    e.preventDefault();
    setCheck(e.target.checked);
  };

  const editTask = (e) => {
    props.EditItem(props.index);
  };

  return (
    <>
      <div className="lists">
        <li className="list-items">
          <span>
            <input
              type="checkbox"
              className="check-items"
              checked={check}
              onChange={completeTask}
            ></input>
            {props.items}
          </span>

          <span>
            <button
              className="list-btn"
              onClick={(e) => {
                editTask(e);
              }}
            >
              Edit
            </button>
            <button
              className="list-btn"
              disabled={!check}
              onClick={(e) => {
                delteTask(e);
              }}
            >
              Del
            </button>
          </span>
        </li>
      </div>
    </>
  );
};

export default TodoList;
