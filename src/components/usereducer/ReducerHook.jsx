import { useReducer } from "react";
import reducer from "./reducer";

const initialValue = 0;

const ReducerHook = () => {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>

      <div className="container text-center m-5">
        <button  className="btn btn-primary btn-lg" onClick={() => dispatch({ type: "INC" })}>
          <div>+</div>
        </button>
        <h1>{count}</h1>
        <button className="btn btn-danger btn-lg " onClick={() => dispatch({ type: "DEC" })}>
          <div>-</div>
        </button>
      </div>
    </>

  );
};


export default ReducerHook;
