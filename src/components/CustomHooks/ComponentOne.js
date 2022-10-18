import axios from "axios";
import React, { useEffect, useState }  from "react";


function ComponentOne() {

    const [post, setPosts] = useState({});
    const [count, setCount] = useState(0);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response=>{
            setPosts(response.data)
            console.log(response);
        })
    }, [])

  return (
    <div>
        Component One <br/>
        {post.title}
        <hr/>
        Count : {count} <br/>
        <button onClick={()=>{setCount(count+1)}}>CHnage</button>
    </div>
  );
}
export default ComponentOne;
