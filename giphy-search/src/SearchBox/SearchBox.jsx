import React, {Component} from 'react';

class SearchBox extends Component
{
	constructor()
	{
		super()
		this.state =
		{
			//STUFF
		}
	}

	handleChange = (e) =>
	{
		e.preventDefault();
		this.setState(
		{
			[e.currentTarget.name]: e.currentTarget.value
		});
	}

	render()
	{
		return(
			<div>
				<form onSubmit = {this.props.handleSearch.bind(null, this.state)}>
					<input type='text' name='searchterms' placeholder='Search here' onChange={this.handleChange}></input>
					<button type='submit'>Search</button>
				</form>
			</div>
		);
	}
}

export default SearchBox;