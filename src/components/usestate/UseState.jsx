import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container text-center">
        <button className="btn btn-primary btn-lg" onClick={() => setCount(count + 1)}>
          <div>+</div>
        </button>

        <h1>{count}</h1>

        <button className="btn btn-primary btn-lg"
          onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}>
          <div>-</div>       
          </button>
      </div>
    </>

  );
};

export default UseState;
