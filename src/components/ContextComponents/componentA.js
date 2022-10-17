import React  from "react";
import ComponentB from "./componentB";

export const UserContext = React.createContext('ARC');
export const ChannelContext = React.createContext();

function ComponentA() {

  return (
    <div>
        ComponentA
        <hr/>
        <UserContext.Provider value={"Ajinkya"}>
        <ChannelContext.Provider value={"Jack of Javascript"}>
        <ComponentB/>
        </ChannelContext.Provider>
        </UserContext.Provider>
    </div>
  );
}
export default ComponentA;
