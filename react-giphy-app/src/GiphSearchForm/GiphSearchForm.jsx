import React, { Component } from 'react'


class GiphSearchForm extends Component {
    constructor(){
        super();
        this.state={
            search: ' '
        }
    }
    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.searchGiphy(this.state)
        document.querySelector("#new-search").childNodes.forEach((node) => {
            node.value = '';
        })
    }
    render() {
        return(
           
               
                <form id="new-search" onSubmit={this.handleSubmit}>
                Giph Search <input onChange={this.handleChange}type="text" name="search"/>
                <input type="submit"/>
                </form>
            
        )
    }
}

export default GiphSearchForm;