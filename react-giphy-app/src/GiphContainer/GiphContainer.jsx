import React, { Component } from 'react';
import GiphSearchForm from './GiphSearchForm/GiphSearchForm';

class GiphContainer extends Component {
    constructor(){
    super();
    this.state={
        giphs: []
    }
 }

 componentDidMount(){
     this.searchGiphy({search: ""});
 }
 searchGiphy = async (formData) =>{ // needs to be defined outside the constructor 
    const searchUrl = (`https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/search?api_key=4BcBQiIzgErTHb8ELALdQpbC9EHbdUhF&q=funny&limit=25&offset=0&rating=PG-13&lang=en${formData.search}`)
    const foundGiph = await fetch(searchUrl);
    console.log(foundGiph)
    const parsedResult = await foundGiph.json();
    this.setState({
        giphs: parsedResult.data
    })
   
}

  

 render(){
    const giphList = this.state.giphs.map((giphy)=>{
        return(
         <div key={giphy.name}>
            <h1> {giphy.name}</h1>
            <img src={giphy.data.downsize.url}></img>
        </div>
        )

    })
     return(
         <div>
          <GiphSearchForm searchGiphy={this.searchGiphy}></GiphSearchForm>
          {giphList}
         </div>
     )
 }
}

export default GiphContainer;