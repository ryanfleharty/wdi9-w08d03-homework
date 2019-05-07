import React, {Component} from 'react';

class GiphySearchForm extends Component{
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
        this.props.searchGiphs(this.state);
        document.querySelector("#new-search").childNodes.forEach((node) => {
            node.value = '';
        });
    }
    render(){
        return <form id="new-search" onSubmit={this.handleSubmit}>
            What kind of gifs do you want? <input onChange = {this.handleChange} type="text" name="search" />
            <input type="submit" />
        </form>
    }
}

export default GiphySearchForm;
