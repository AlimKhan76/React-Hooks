// it create a mutable variable which will not re-render the components
// Used to access the DOM element directly

import React, { useState, useEffect, useRef } from "react";

const RefHook1 = () => {
  const [userInput, setUserInput] = useState("");
  // const [count, setCount] = useState();
  const count = useRef(0);
  // console.log("🚀 ~ file: RefHook1.jsx ~ line 11 ~ RefHook1 ~ count", count);

  useEffect(() => {
    // setCount(count + 1);
    count.current = count.current + 1;
  });

  return (
    <>
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}/>
        <br/>
        <p>the number of times comp render:{count.current} </p>

      

    </div>
  

    </>
  );
};


export default RefHook1;
