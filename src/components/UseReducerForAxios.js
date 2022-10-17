

import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

const postReducer = (state, action) => {

    switch (action.type) {
        case "Success":
            return { loading: false, erroMessage: 'aaa', title: action.value.title }
        case "Error":
            return { loading: false, erroMessage: 'Error Found', title: action.value.title }
        default:
            break;
    }
}

const initialPost = {
    loading: false,
    errorMessage: 'Something went Wrong',
    title: 'no-data'
}

function UseReducerForAxios() {

    // const [post, setPosts] = useState([]);
    const [post, dispatch] = useReducer(postReducer, initialPost)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`).then(response => {
            console.log(response.data)
            dispatch({ type: 'Success', value: response.data })
        },
        error =>{
            dispatch({ type: 'Failure', value: error })
            console.log(error)
        }
        )
    }, [])

    return (<div>
        <ul>
            {post.title}
        </ul>
        <ul>
            {post.errorMessage}
        </ul>
        <ul>
            {post.loading}
        </ul>
    </div>)
}

export default UseReducerForAxios;