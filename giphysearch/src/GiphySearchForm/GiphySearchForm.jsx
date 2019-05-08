import React, {Component} from 'react';

class GiphySearchForm extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchGiphy(this.state.search);
    }
    render(){
        return <div>
            <form onSubmit = {this.handleSubmit}>
               Find Giphy: <input onChange = {this.handleChange} type = "text" name = "search" />
                <input type = "submit"/>
            </form>
        </div>
    }
}



export default GiphySearchForm;