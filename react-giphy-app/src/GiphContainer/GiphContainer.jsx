import React, { Component } from 'react';
import GiphSearchForm from '../GiphSearchForm/GiphSearchForm';

class GiphContainer extends Component {
    constructor(){
    super();
    this.state={
        giphs: []
    }
 }

 componentDidMount(){
     this.searchGiphys({search: ""});
 }
 searchGiphys = async (formData) => {
     try{
    const searchURL = (`https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/search?q=${formData}&api_key=4BcBQiIzgErTHb8ELALdQpbC9EHbdUhF&q=funny&limit=25`)
    const result = await fetch(searchURL);
    console.log('this');
    const parsedResult = await result.json();

    this.setState({
        giphs: parsedResult.data 
    })
    }catch(err){
        
    }
}
  

 render(){
    const giphList = this.state.giphs.map((giphs)=>{
        return(
         <div key={giphs.url}>
         <img src={giphs.images.downsized.url}/>
     </div>
        )

    })
     return(
         <div>
          <GiphSearchForm searchGiphys={this.searchGiphys}></GiphSearchForm>
          {giphList}
         </div>
     )
 }
}

export default GiphContainer;