import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div className="container m-5 text-center">
      <h2>Parent Comp</h2>
      <Child />
    </div>
  );
};

export default Parent;
