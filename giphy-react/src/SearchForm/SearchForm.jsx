import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(){
    super()
    this.state = {
      search: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchGiphy(this.state)
  }
  render(){
    return(
    <form onSubmit={this.handleSubmit}>
    <input onChange = {this.handleChange} type='text' name='giphy' placeholder='SEARCH GIFs' />
    <button type='submit'>Search</button>
    </form>
    )
  }
}

export default SearchForm
