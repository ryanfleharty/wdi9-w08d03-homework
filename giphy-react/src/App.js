import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './SearchForm/SearchForm'
import GiphyContainer from './GiphyContainer/GiphyContainer'

class App extends Component {
  render(){
    return (
      <div className='app'>
        
        <GiphyContainer />
      </div>
    )
  }
}

export default App;
