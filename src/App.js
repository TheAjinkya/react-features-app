import './App.css';
import React from 'react';
import Viewings from './timeline/Viewings';


function App() {

  return (<div className="App">Hello World<hr/>
  {/* <Dashboard name="Ajinkya" profession="software engineer">This is children Props</Dashboard> */}
  <hr/>
  <Viewings/>
  </div>);
}

export default App;
