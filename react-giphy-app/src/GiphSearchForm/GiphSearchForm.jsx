import React, { Component } from 'react'


class GiphSearchForm extends Component {
    constructor(props){
        super(props);
        this.state={
           search: " "
        }
    }
    handleChange = (e) =>{
        e.preventDefault();

        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.searchGiphys(this.state);
    }
    render() {
        return(
           
               
                <form onSubmit={this.handleSubmit}>
                Giph Search <input onChange={this.handleChange}type="text" name="search"/>
                <input type="submit"/>
                </form>
            
        )
    }
}

export default GiphSearchForm;