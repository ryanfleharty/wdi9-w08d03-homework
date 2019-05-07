import React from 'react';
import logo from './logo.svg';
import './App.css';
import GiphyContainer from './GiphyContainer/GiphyContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Giphy Search App</h1>
      </header>
      <GiphyContainer></GiphyContainer>
    </div>
  );
}

export default App;
