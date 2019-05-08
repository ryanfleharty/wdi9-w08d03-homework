import React, { Component } from 'react';

class Search extends Component {
    constructor(){
        super();
        this.state = {
            search: "",
            results: []
        }
    }

    searchGifs = async () => {
        const foundGifs = await fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=odlUICrQM1k9JLaNEuq2i1yVTfcv359M&limit=9`);
        const parsedGifs = await foundGifs.json();

        const gifsArray = parsedGifs.data;
        console.log(gifsArray, 'gifsArray')
        const gifsShow = gifsArray.map((gif) => {
            return(
                <div className="iframes">
                    <img src={ gif.images.original.url } />
                </div>
            )
        })
        this.setState({
            results: gifsShow
        })
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.searchGifs(this.state);
    };
    render(){
        return (
            <div>
                <h1>get your gif on...</h1>
                <form onSubmit={ this.handleSubmit }>
                    <h3>search for gifs: <input onChange={ this.handleChange } type="text" name="search" placeholder="when in doubt, search for cats"/>
                    <button type="submit">SUBMIT</button></h3>
                </form>
                { this.state.results }
            </div>
        )
    };
}

export default Search;