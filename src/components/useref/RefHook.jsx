import React, { useRef } from "react";

const RefHook = () => {
  const inputRef = useRef();

  const changeBorder = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#82E0AA";
  };

  return (
    <>
    <div className="container text-center m-5">

      <input type="text" ref={inputRef} />
      <br />
      <button className="btn btn-primary m-1" onClick={changeBorder}>submit</button>
    </div>
    </>
  );
};



export default RefHook;
