import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GiphyContainer from './GiphyContainer/GiphyContainer'

class App extends Component {
    constructor() {
      super();
      this.state = {
        giphys: []
      }
    }
  render (){
    return(
    <div className="App">
        <GiphyContainer/>
    </div>
    )};
}

export default App;
