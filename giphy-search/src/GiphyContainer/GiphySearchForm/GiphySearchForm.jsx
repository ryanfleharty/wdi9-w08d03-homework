import React, {Component} from 'react';


class GiphySearchForm extends Component {
    constructor(){
        super();
        this.state = {
            gif: [],
            searchString: ''
        }
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.props.searchGifs(this.state.searchString);
    }
    handleSearchStringChange = (e) => {
        this.setState({searchString: e.target.value});
    }
    render(){
        return ( 
            <form onSubmit={this.handleSearch}>
                Search Giphy: <input type="text" name="search" value={this.state.searchString} onChange={this.handleSearchStringChange}/>
                <input type="submit"/>
            </form>
            
        )
        
    }
}



export default GiphySearchForm;