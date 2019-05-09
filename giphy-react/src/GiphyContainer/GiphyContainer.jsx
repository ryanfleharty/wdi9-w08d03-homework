import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';

class GiphyContainer extends Component{
  constructor(){
    super();
    this.state = {
      giphy: []
    }
  }
  componentDidMount(){
    this.searchGiphy({search:''});

  }
  searchGiphy = (formData) => {
    const getGiphy = `http://api.giphy.com/v1/gifs/search?q=${formData.giphy}&api_key=S4tL5JJhqlF4Q190zo8dTSy79898Zzje`
    fetch(getGiphy)
    .then ((response) => response.json())
    .then((gif) => {
      this.setState({
        giphy: gif.data
      })
      console.log(this.state.giphy);
    })
  }
  render(){
    const gifList = this.state.giphy.map((gifs) => {
      console.log(gifs);
      return(
        <div>
          <img src={gifs.images.preview_gif.url} alt='gif' />
        </div>
      )
    })
    return (
    <div>
    <h1>React GIFs</h1>
    <SearchForm searchGiphy = {this.searchGiphy}/>
    {gifList}
    </div>
    )
  }
}


export default GiphyContainer
