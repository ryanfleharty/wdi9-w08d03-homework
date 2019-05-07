import React, { Component } from 'react';

class Search extends Component {
    constructor(){
        super();
        this.state = {
            search: "",
            results: []
        }
    }
    render(){
        return (
            <div>
                <h1>get your gif on...</h1>
                <form>
                    search for gifs: <input type="text" name="search" placeholder="something goofy? funny? cats?"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Search;