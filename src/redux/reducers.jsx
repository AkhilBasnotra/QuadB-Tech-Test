import { ADD_TODO, DELETE_TODO } from "./actions";

const initialState = {
  todos: [
    { name: "go to college", date: "04/02/2024" },
    { name: "buy milk", date: "04/02/2024" },
    { name: "watch market", date: "04/02/2024" },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.name !== action.payload.name),
      };
    default:
      return state;
  }
};

export default todoReducer;
