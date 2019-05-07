import React, { Component } from 'react';
import GiphySearchForm from './GiphySearchForm/GiphySearchForm'

class GiphyContainer extends Component{
    constructor(){
        super();
        this.state = {
            giphs: []
        }
    }
    componentDidMount(){
        this.searchGiphs({search: ""});
    }
    searchGiphs = async (formData) => {
        const searchURL = `https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/search?api_key=lXoG22Hbkf2Ybzio57ol7TiYbZdRKWju&q=${formData.search}&limit=25&offset=0&rating=G&lang=en`
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        this.setState({
            giphs: parsedResult.data // .results.filter(giph => giph.population !== "unknown")
        })
    }
    render(){
        const giphsList = this.state.giphs.map((giph, index)=>{
            return(<div key={index}>
                <h5>{giph.title}</h5>
                <img src={giph.images.downsized.url} alt={index}></img>
            </div>)
        });
        return (
            <div>
                <h2>Search for your favorite Gifs Below:</h2>
                <GiphySearchForm searchGiphs={this.searchGiphs}></GiphySearchForm>
                { giphsList }
            </div>
        )
    }
}

export default GiphyContainer;