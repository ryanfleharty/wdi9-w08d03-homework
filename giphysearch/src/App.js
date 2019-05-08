import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import GiphySearchForm from './GiphySearchForm/GiphySearchForm'


class App extends Component {
  constructor(){
    super()
    this.state = {
      gifs: []
    }
  }
  componentDidMount(){
    this.searchGiphy({search: ""}); 
  }
  searchGiphy = async (formData) => {
    const searchURL = `https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/search?api_key=YYFlSfmBKE9ztZy9uYDmLiE9JKBrrIFJ&q=${formData}&limit=25&offset=0&rating=G&lang=en`
    const result = await fetch(searchURL);
    const parsedResult = await result.json();
    this.setState({
        gifs: parsedResult.data
  })
  }
  render(){
    const giphyList = this.state.gifs.map((gif) => {
      console.log(gif.images.downsized.url)
      return (
        <div>
          <img src = {gif.images.downsized.url}/>
        </div>
      )
    })
    return (
      <div className="App">
        <h1>Welcome to the Giphy Search App!</h1>
        <GiphySearchForm gifs = {this.state.gifs} searchGiphy = {this.searchGiphy}/>
        {giphyList}
      </div>
    );
  }
}


export default App;
