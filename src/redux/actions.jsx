export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (name, date) => ({
  type: ADD_TODO,
  payload: { name, date },
});

export const deleteTodo = (name) => ({
  type: DELETE_TODO,
  payload: { name },
});
