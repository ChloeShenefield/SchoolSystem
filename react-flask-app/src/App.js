import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PersonList from './Components/PersonList';
import PersonInput from './Components/PersonInput';
import PersonDelete from './Components/PersonDelete';

class  App extends Component {
  render(){
    return ( 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <PersonInput />
          <PersonDelete />
          <PersonList />
        </header>
      </div>
    );
  }
}
export default App;
