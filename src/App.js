import React from 'react';
import './App.css';
import Todos from './Todos'
import './index.css';
import Menu from './Menu';


function App() {

  return (
    <div id="content">
    <Menu id ="menu"/>
    <Todos />
    </div>
  );
}

export default App;
