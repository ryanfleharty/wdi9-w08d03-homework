import React, {Component} from 'react'
import GiphySearchContainer from './GiphySearchContainer/GiphySearchContainer';


class GiphyContainer extends Component {
    constructor () {
        super();
        this.state = {
                giphy: []
        }
    }
      componentDidMount(){
        this.searchGiphys({search: ""});
      }
      //How do I get search result to clear out are each new search? More funtcions/logic?
    searchGiphys = async (formData) => {
        //console.log(formData + 'formdata................')
        const searchURL = await `http://api.giphy.com/v1/gifs/search?q=${formData.search}&api_key=3LRPjEGRC6e0e7lwn7H8Fe848tjKA9hn`
        // key=3LRPjEGRC6e0e7lwn7H8Fe848tjKA9hn
        //forgot to include .search at the end of formData. 
        //Unclear because when 
        //I try and console log it shows me an empty object 
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        console.log(parsedResult.data);
        this.setState({
            giphy: parsedResult.data
    })
    }
   render(){
    const giphyList = this.state.giphy.map((giphys)=>{
        return(
            <div key={giphys._id}>
                <h5>{giphys.title}</h5>
                <img src={giphys.images.downsized.url}></img> 
            </div>
        )
    })
       return(
           <div>
        <h1> Giphy Search Page</h1>
           <GiphySearchContainer searchGiphys = {this.searchGiphys}/>
        {giphyList}
           </div>
       )
   }
}






export default GiphyContainer;