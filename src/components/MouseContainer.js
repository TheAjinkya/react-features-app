import React, { useEffect, useState } from 'react'
import HookCounter from './HookCounter';
import UseStateHookDataTypes from './UseStateHookDataTypes';
import axios from 'axios'

function MouseContainer() {

    const [display, setDisplay] = useState(false);
    const [post, setPosts] = useState([]);
    const [postById, setPostById] = useState({});
    const [id, setId] = useState(0);
    const [idFromButtonClick, setIdFromButtonClick] = useState();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(response => {
            console.log(response.data)
            setPosts(response.data)
        })
    }, [])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then(response => {
            console.log(response.data)
            setPostById(response.data)
        })
    }, [idFromButtonClick])

    const chnageHandler = (e) => {
        console.log(e.target.value);
        setId(e.target.value)
    }
    const getPost = ()=>{
        setIdFromButtonClick(id)
    }

    return (<div>
        ENter the Post ID: <input type="text" value={id} onChange={(e) => { chnageHandler(e) }}></input>
        <button onClick={() => { getPost() }}> Get Post </button>
        <br />
        {postById.title ? postById.title : "No Data"}
        <hr />
        <ul>
            {post.map(res => res.title)}
        </ul>
        <button onClick={() => { setDisplay(!display) }}> Toogle </button>
        {display && <UseStateHookDataTypes />}
    </div>)

}

export default MouseContainer;