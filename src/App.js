import logo from './logo.svg';
import './App.css';
import UseEffectApp from './dashboard/useEffectApp';
import CompX from './dashboard/serviceContext/compX';
import React from 'react';
import CounterReducerApp from './dashboard/serviceReducer/counterReducerApp';
import GetDataFromUseReducer from './dashboard/serivceUseReducerEffect/getDataFromUseReducer';


const user = {
  firstName: 'A',
  lastName:'B'
}

export const UserContext = React.createContext();
export const channel = React.createContext();

function App() {

  return (
    <div className="App">
      <CounterReducerApp/>
      <hr/>
      <GetDataFromUseReducer/>
      </div>
  );
}

export default App;
