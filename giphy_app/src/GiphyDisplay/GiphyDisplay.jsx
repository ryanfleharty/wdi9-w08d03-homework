import React, {Component} from 'react';
import GiphyForm from './GiphyForm/GiphyForm';
import GiphyResults from './GiphyResults/GiphyResults';

class GiphyDisplay extends Component {
    constructor(){
        super();
        this.state = {
            gifs: [],
            fuck: 'fuck'

        }
    }

    componentDidMount(){
        this.searchGiphy();
    }

    searchGiphy = async (formData) => {
        
        //console.log(formData, "<--- form data");
        const searchURL = `https://api.giphy.com/v1/gifs/search?api_key=0sJVeJRt1s4DmMp6yDqNESp65WK5By0J&q=${formData}&limit=25&offset=0&rating=G&lang=en`;
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        
        this.setState({
            gifs: parsedResult
        })
        console.log(this.state.gifs.data[0].title, "<-- this.state.gifs.data[0].title in searchGiphy()");
        console.log(typeof this.state.gifs.data[0].title, "<-- <typeof> title in searchGiphy");
    }

    

    render(){
        console.log(this.state.gifs.data, "this.state.gifs.data in render");
        

        return(
            <div>
                <GiphyForm searchGiphy={this.searchGiphy}/>
                <GiphyResults gifArray={this.state.gifs.data}/>
            </div>
        )

    }

}

export default GiphyDisplay;



