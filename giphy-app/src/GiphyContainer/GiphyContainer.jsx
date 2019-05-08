import React, {Component} from 'react'
import GiphySearchContainer from './GiphySearchContainer/GiphySearchContainer';


class GiphyContainer extends Component {
    constructor () {
        super();
        this.state = {
                giphy: []
        }
    }
    //   componentDidMount(){
    //     this.searchGiphys({search: ""});
    //   }
    searchGiphys = async (formData) => {
        console.log(formData + 'formdata................')
        const searchURL = await `http://api.giphy.com/v1/gifs/search?q=${formData}&api_key=3LRPjEGRC6e0e7lwn7H8Fe848tjKA9hn`
        // key=3LRPjEGRC6e0e7lwn7H8Fe848tjKA9hn
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        console.log(parsedResult);
        this.setState({
            giphy: parsedResult.data
    })
    }
   render(){
    const giphyList = this.state.giphy.map((giphys)=>{
        return(
            <div key={giphys.title}>
                <h5>{giphys.title}</h5>
            </div>
        )
    })
       return(
           <div>
        <h1> Giphy Search Page</h1>
           <GiphySearchContainer searchGiphys = {this.searchGiphys}/>
         <img src=" "></img> {giphyList}
           </div>
       )
   }
}






export default GiphyContainer;