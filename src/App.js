import logo from './logo.svg';
import './App.css';
import React from 'react';
import Dashboard from './revised/dashboard';
import SignUp from './revised/SignUp';
import Counter from './revised/higherOrderComp/Counter';
import MouseHoverApp from './revised/higherOrderComp/MouseHoverApp';
import KeyPressApp from './revised/higherOrderComp/KeyPressApp';
import CounterTwo from './revised/renderPropsComp/CounterRender';
import CounterRender from './revised/renderPropsComp/CounterRender';


function App() {

  return (<div className="App">Hello World<hr/>
  <Dashboard name="Ajinkya" profession="software engineer">This is children Props</Dashboard>
  <hr/>
  Render Props: <br/>
  <CounterRender name={(count, increment, decrement)=> (<CounterTwo count={count} increment={increment} decrement={decrement}></CounterTwo>) }/>
  </div>);
}

export default App;
