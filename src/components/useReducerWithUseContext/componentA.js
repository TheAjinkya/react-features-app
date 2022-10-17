import React, { useContext }  from "react";
import { countContext } from "../../App";
import ComponentB from "../useReducerWithUseContext/componentB";

function ComponentA() {

  const countAtAComp = useContext(countContext)
  return (
    <div>
        ComponentA
        <button onClick={() => countAtAComp.contextDispatch({ type: "increment", value: 5 })}>S Increment by 5</button>
        <button onClick={() => countAtAComp.contextDispatch({ type: "multiply", value: 5 })}>S Multiply by 5</button>
        <button onClick={() => countAtAComp.contextDispatch({ type: "reset", value: 0 })}>S Reset</button>
        <button onClick={() => countAtAComp.contextDispatch({ type: "incrementfirst", value: 5 })}>F Increment by 5</button>
        <br/>
        ---------------------------------------------------------------------------
        <br/>
        <ComponentB/>
    </div>
  );
}
export default ComponentA;
