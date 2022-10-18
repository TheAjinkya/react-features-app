import axios from "axios";
import React, { useEffect, useState }  from "react";


function ComponentUseEffect() {

    const [post, setPosts] = useState({});

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
    </div>
  );
}
export default ComponentUseEffect;
