import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <div className="container text-center m-5">
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo + index}</p>;
      })}

      <button className="btn btn-primary" onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default memo(Todos);
