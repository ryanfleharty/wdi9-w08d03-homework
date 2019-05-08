import React, { Component } from 'react';

class Search extends Component {
    constructor(){
        super();
        this.state = {
            search: "",
            results: ['show something', 'something else']
        }
    }

    searchGifs = async () => {
        const foundGifs = await fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=odlUICrQM1k9JLaNEuq2i1yVTfcv359M`);
        const parsedGifs = await foundGifs.json();
        console.log(parsedGifs, 'parsedGifs')    
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
        console.log(this.state.search, 'search')

        return (
            <div>
                <h1>get your gif on...</h1>
                <form onSubmit={ this.handleSubmit }>
                    search for gifs: <input onChange={ this.handleChange } type="text" name="search" placeholder="something goofy? funny? cats?"/>
                    <input type="submit"/>
                    { this.props.gifs }
                </form>
            </div>
        )
    };
}

export default Search;