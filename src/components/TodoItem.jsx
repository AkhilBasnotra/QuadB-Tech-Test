import { MdDelete } from "react-icons/md";

function TodoItem(props) {
  return (
    <div className={`container ${props.completed ? "completed" : ""}`}>
      <div className="row kg-row">
        <div className="col-1">
          <input
            type="checkbox"
            checked={props.completed}
            onChange={() => props.toggleCompletion(props.todoName)}
          />
        </div>
        <div className="col-5">{props.todoName}</div>
        <div className="col-3">{props.todoDate}</div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => props.deleteHandler(props.todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
