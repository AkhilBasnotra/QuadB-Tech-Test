import TodoItem from "./TodoItem";

let TodoItems = ({ todoItems, deleteHandler, toggleCompletion }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            todoName={item.name}
            todoDate={item.date}
            completed={item.completed} // Pass the completed state
            key={Math.random()}
            deleteHandler={deleteHandler}
            toggleCompletion={toggleCompletion} // Pass the toggleCompletion function
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
