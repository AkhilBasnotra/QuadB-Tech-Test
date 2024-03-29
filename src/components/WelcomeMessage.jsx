let WelcomeMessage = ({ myTodos }) => {
  return <>{myTodos.length === 0 ? <h2>Add Todos</h2> : null}</>;
};

export default WelcomeMessage;
