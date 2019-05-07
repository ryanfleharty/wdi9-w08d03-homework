import React, {Component} from 'react';
import './App.css';
import GiphyContainer from './GiphyContainer/GiphyContainer'
import GiphySearchForm from './GiphyContainer/GiphySearchForm/GiphySearchForm'

class App extends Component {
  constructor(){
    super();
  }


  render(){
    return (
      <div className="App">
        <h2>suh dude.</h2>
        <GiphySearchForm></GiphySearchForm>
      </div>
    );
  }
}

export default App;
