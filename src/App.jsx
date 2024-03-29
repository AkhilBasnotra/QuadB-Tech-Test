import React, { useState, useEffect } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const handleNewItem = (input, date) => {
    // Check if the input is empty
    if (input.trim() === "") {
      // Alert the user or handle the empty input case as desired
      alert("Please enter a todo item!");
      return; // Exit the function early if the input is empty
    }

    const newTodoItem = [
      ...todo,
      { name: input, date: date, completed: false },
    ];
    setTodo(newTodoItem);
  };

  const handleDeleteButton = (todoName) => {
    let newTodoItems = todo.filter((item) => item.name !== todoName);
    setTodo(newTodoItems);
  };

  const handleToggleCompletion = (todoName) => {
    setTodo(
      todo.map((item) => {
        if (item.name === todoName) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo clickHandler={handleNewItem} />
      <WelcomeMessage myTodos={todo} />
      <TodoItems
        todoItems={todo}
        deleteHandler={handleDeleteButton}
        toggleCompletion={handleToggleCompletion}
      />
    </center>
  );
}

export default App;
