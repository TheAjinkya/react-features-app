import { React, useEffect, useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ajinkya");

  useEffect(()=>{
    console.log("useffect called")
    document.title = `Clicked ${count}`
  }, [])

  return (
    <div>
      <input value={name} onChange={(e)=>{setName(e.target.value)}}></input> <br/>
      {name} <br/>
      Count : {count} <hr />
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
    </div>
  );
}
export default HookCounter;
