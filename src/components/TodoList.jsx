import react from "react";

const TodoList = (props) => {
  const delteTask = (e) => {
    e.preventDefault();
    props.deleteItem(props.index);
  };

  const completeTask = (e) => {
    e.preventDefault();
    

  };
  return (
    <>
      <div className="lists">
        <li className="list-items">
          <span>
            <input
              type="checkbox"
              className="check-items"
              onClick={completeTask}
            ></input>
            {props.items}
          </span>

          <span>
            <button
              className="list-btn"
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
