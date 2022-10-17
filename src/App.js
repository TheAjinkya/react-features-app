import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import UseStateHookDataTypes from './components/UseStateHookDataTypes';
import MouseContainer from './components/MouseContainer';
import UseReducerComponent from './components/UseReducerComp/UseReducerComponent';
import UseReducerObjectComp from './components/UseReducerComp/UseReducerObjectComp';
import React, { useReducer } from 'react';
import ComponentA from './components/useReducerWithUseContext/componentA';
import UseReducerForAxios from './components/UseReducerForAxios';

const initialCount = {
  firstCounter: 0,
  secondCounter:0
}

const reducerMyCount = (state, action) => {

   switch (action.type) {
    case "increment":
        return {...state, secondCounter: state.secondCounter + action.value }
    case "multiply":
        return { ...state, secondCounter: state.secondCounter * action.value }
        case "reset":
        return { ...state, firstCounter: action.value, secondCounter: action.value }
        case "incrementfirst":
        return { ...state, firstCounter: state.firstCounter + action.value }
    default:
        break;
}

}
export const countContext = React.createContext()

function App() {

  const [count, dispatch] = useReducer(reducerMyCount, initialCount)

  return (
    <div className="App">
      UseReducer for Axios : <br/>
      <UseReducerForAxios/>
      <hr/>
        Global First Count: {count.firstCounter} <br/>
        Global Second Count: {count.secondCounter} <br/>
   ........................................   ........................................   ........................................
      
      <countContext.Provider value={{contextCount:count, contextDispatch:dispatch}}>
      <ComponentA/>
      </countContext.Provider>
      ........................................   ........................................   ........................................

      {/* <UseReducerComponent/> */}
      <UseReducerObjectComp />
      <hr />
      This is the useState Hook:
      <ClassCounter />
      <hr />
      <MouseContainer />
      <hr />
      UseState Data Types
      {/* <UseStateHookDataTypes/> */}
    </div>
  );
}

export default App;
