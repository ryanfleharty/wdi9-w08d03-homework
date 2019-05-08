import React, {Component} from 'react';

class GiphyForm extends Component {
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchGiphy(this.state.search);
        
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input id="giphyInput" onChange={this.handleChange} type="text" name="search" placeholder="search giphy"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}


export default GiphyForm;