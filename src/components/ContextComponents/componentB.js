import { React, useContext } from "react";
import ComponentA, { ChannelContext, UserContext } from "./componentA";
import ComponentC from "./ComponentC";

function ComponentB() {
    
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    
  return (
    <div>
        ComponentB is using the useContext here!<br/>
        {user} and {channel}
        <hr/>
        <ComponentC/>
    </div>
  );
}
export default ComponentB;
