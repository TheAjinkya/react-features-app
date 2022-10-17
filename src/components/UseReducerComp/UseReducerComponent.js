import React, { useReducer } from 'react'

const initialCount = 0;
const reducerCount = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return initialCount
        default:
            return state
    }
}

function UseReducerComponent() {

    const [count, disptach] = useReducer(reducerCount, initialCount);

    return (<div>
        Count : {count} <br />
        <button onClick={() => disptach("increment")}>Increment</button>
        <button onClick={() => disptach("decrement")}>Decrement</button>
        <button onClick={() => disptach("reset")}>Reset</button>
    </div>)
}

export default UseReducerComponent;