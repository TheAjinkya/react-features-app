import { React, useContext } from "react";
import { countContext } from "../../App2";
import ComponentA, { ChannelContext, UserContext } from "./componentA";
import ComponentC from "./ComponentC";

function ComponentB() {
    
  const countAtAComp = useContext(countContext)
  return (
    <div>
        ComponentB
        <button onClick={() => countAtAComp.contextDispatch({ type: "increment", value: 5 })}>S Increment by 5</button>
        <button onClick={() => countAtAComp.contextDispatch({ type: "multiply", value: 5 })}>S Multiply by 5</button>
        <button onClick={() => countAtAComp.contextDispatch({ type: "reset", value: 0 })}>S Reset</button>
        <button onClick={() => countAtAComp.contextDispatch({ type: "incrementfirst", value: 5 })}>F Increment by 5</button>

    </div>
  );
}
export default ComponentB;
