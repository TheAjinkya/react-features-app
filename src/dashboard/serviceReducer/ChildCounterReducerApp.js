import React, { useContext, useReducer } from 'react'
import { userContext } from './counterReducerApp'


function ChildCounterReducerApp() {

    const childContext = useContext(userContext);

    return (<div>Hello Child Reducer<br/>
    
    {/* First Counter : {childContext.childCount.firstCounter} <br/>
    Second Counter : {childContext.childCount.secondCounter} */}
    <button onClick={()=>{childContext.childDispatch({type:"increment", value:1})}}>Increment</button>
    <button onClick={()=>{childContext.childDispatch({type:"decrement", value:2})}}>Decrement</button>
    </div>)
}

export default ChildCounterReducerApp;