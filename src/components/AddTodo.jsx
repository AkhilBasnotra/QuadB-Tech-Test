import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { MdOutlineAddCircleOutline } from "react-icons/md";

function AddTodo({ clickHandler }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleDateChange = (e) => {
    setTodoDate(e.target.value);
  };

  const handleAddButtonClicked = () => {
    clickHandler(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            className={`${styles.inputBox}`}
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={handleDateChange}
            value={todoDate}
            className={`${styles.dateBox}`}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <MdOutlineAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
