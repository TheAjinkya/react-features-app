import axios from "axios";
import React, { useEffect, useState } from "react";

function UseEffectApp() {
  const [count, setCount] = useState(0);
  const [isDisabled, setDisabled] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count}`;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
      });
    window.addEventListener("click", () => {
      console.log("Scrolled");
    });
    console.log(count);
    console.log("increment isDisabled", isDisabled);

    callThisFunction()
    
    return () => {
    window.removeEventListener("click")    
    };
  }, [id]);

  const callThisFunction = ()=>{

  }

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setDisabled((prevValue) => {
      return !prevValue;
    });
    setId((prev) => prev + 1);
  };

  return (
    <div>
      This is the useEffectApp <br />
      Count: {count}
      <button
        onClick={() => {
          increment();
        }}
      >
        {" "}
        Increment
      </button>
    </div>
  );
}

export default UseEffectApp;
