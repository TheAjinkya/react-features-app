import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer } from 'react'

const initialCounter = {
    firstCounter:10,
    secondCounter: 10
}

const reducerCounter = (count, action) => {
    switch (action.type) {
        case "increment":
            return {...count, secondCounter: count.secondCounter + action.value }
        case "multiply":
            return { ...count, secondCounter: count.secondCounter * action.value }
            case "reset":
            return { ...count, firstCounter: action.value, secondCounter: action.value }
            case "incrementfirst":
            return { ...count, firstCounter: count.firstCounter + action.value }
        default:
            break;
    }
}

function UseReducerObjectComp() {

    const [secondCount, dispatch] = useReducer(reducerCounter, initialCounter)

    const [thirdCount, dispatchThird] = useReducer(reducerCounter, initialCounter)

    return (<div>
        Complex Object Reducer <br/>
        First Counter: {secondCount.firstCounter} <br/>
        Second Counter: {secondCount.secondCounter} <br/>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>S Increment by 5</button>
        <button onClick={() => dispatch({ type: "multiply", value: 5 })}>S Multiply by 5</button>
        <button onClick={() => dispatch({ type: "reset", value: 0 })}>S Reset</button>
        <button onClick={() => dispatch({ type: "incrementfirst", value: 5 })}>F Increment by 5</button>
        <br/>

        first thirdCount: {thirdCount.firstCounter}<br/>
        second thirdCount: {thirdCount.secondCounter} <br/>
        <button onClick={() => dispatchThird({ type: "increment", value: 5 })}>S Increment by 5</button>
        <button onClick={() => dispatchThird({ type: "multiply", value: 5 })}>S Multiply by 5</button>
        <button onClick={() => dispatchThird({ type: "reset", value: 0 })}>S Reset</button>
        <button onClick={() => dispatchThird({ type: "incrementfirst", value: 5 })}>F Increment by 5</button>
    </div>)

}

export default UseReducerObjectComp;