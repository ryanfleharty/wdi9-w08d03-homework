import React, {Component} from 'react';
import './App.css';
import GiphyDisplay from './GiphyDisplay/GiphyDisplay';


class App extends Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }
  
  render(){
    return(
    <div className="App">
      <h1>Giphy App</h1>
      <GiphyDisplay/>
      
    </div>
    )
  };
}

export default App;
