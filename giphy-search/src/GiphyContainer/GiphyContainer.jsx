import React, {Component} from 'react';
import GiphySearchForm from './GiphySearchForm/GiphySearchForm'

class GiphyContainer extends Component {
    constructor(){
        super();
        this.state = {
            gif: []
        }
    }
    componentDidMount(){
    }

    searchGifs = async (formData) => {
        console.log(123, formData);
        const searchURL = `https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/search?q=${formData}&api_key=FwdGyXSJLV5dhbXKA3qadP6C33JIypoc&limit=1`
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        console.log(parsedResult);
        this.setState({
            gif: parsedResult.data
        })
        console.log(this.state.gif);
    }
    render(){
        const gifList = this.state.gif.map((gif) => {
            return <div key={gif.url}>
                <img src={gif.images.downsized.url}/>
            </div>
        })
        return <div>

            <GiphySearchForm searchGifs={this.searchGifs}></GiphySearchForm>
            {gifList}
        </div>
    }
}

export default GiphyContainer;