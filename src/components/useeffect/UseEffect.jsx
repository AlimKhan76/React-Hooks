import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  const countUpdate = (val) => {
    if (val === "inc") return setCount(count + 1);
    if (val === "dec") return setCount(count - 1);
  };

  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <>
      <div className="container text-center m-5">
        <button className="btn btn-lg btn-primary" onClick={() => countUpdate("inc")}>
          +         
           </button>
        <h1>{count}</h1>
        <button className="btn btn-lg btn-danger" onClick={() => countUpdate("dec")}>
          -         
           </button>
      </div>
    </>
  );
};


export default UseEffect;
