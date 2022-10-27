import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react'

const reducerPost = (state, action)=>{
    switch (action.type) {
        case 'get':
                return {title: action.value}
        default:
            break;
    }
}

const initialPost = {
    title:'Abc'
}

function GetDataFromUseReducer() {

    const [post, dispatch] = useReducer(reducerPost, initialPost)
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(response=>{
            console.log(response)
            dispatch({type:'get', value: response.data[0].title})
        })   
    },[])

    return (<div>
           Count {post.title}
    </div>)
}

export default GetDataFromUseReducer;