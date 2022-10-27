import React, { useReducer } from 'react'
import ChildCounterReducerApp from './ChildCounterReducerApp'

const initialCounter = {
    firstCounter: 0,
    secondCounter: 0
}

const reduceCounter = (state, action) => {

    switch (action.type) {
        case "increment":
            return ({ ...state, firstCounter: state.firstCounter + action.value, secondCounter: state.secondCounter + action.value })
        case "decrement":
            return ({ ...state, firstCounter: state.firstCounter - action.value, secondCounter: state.secondCounter - action.value })
        default:
            break;
    }
}

export const userContext = React.createContext();

function CounterReducerApp() {

    const [counter, dispatch] = useReducer(reduceCounter, initialCounter)

    return (<div>Hello Counter Reducer <br/>
    
    First Counter : {counter.firstCounter} <br/>
    Second Counter : {counter.secondCounter}
    <button onClick={()=>{dispatch({type:"increment", value:10})}}>Increment</button>
    <button onClick={()=>{dispatch({type:"decrement", value:2})}}>Decrement</button>
    <hr/>
    <userContext.Provider value={{childCount :counter, childDispatch: dispatch}}>
    <ChildCounterReducerApp/>
    </userContext.Provider>
    </div>)
}

export default CounterReducerApp;