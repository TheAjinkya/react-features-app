import logo from './logo.svg';
import './App.css';
import React from 'react';
import Dashboard from './revised/dashboard';
import SignUp from './revised/SignUp';
import Counter from './revised/higherOrderComp/Counter';
import MouseHoverApp from './revised/higherOrderComp/MouseHoverApp';
import KeyPressApp from './revised/higherOrderComp/KeyPressApp';


function App() {

  return (<div className="App">Hello World<hr/>
  <Dashboard name="Ajinkya" profession="software engineer">This is children Props</Dashboard>
  <hr/>
  <Counter/>
  <hr/>
  <MouseHoverApp/>
  <KeyPressApp/>
  </div>);
}

export default App;
