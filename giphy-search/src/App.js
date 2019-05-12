import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import SearchResults from './SearchResults/SearchResults';

class App extends Component
{
	constructor()
	{
		super();
		this.state =
		{
			//STUFF
		}
	}

	render()
	{
		return (
			<div className="App">
				<h1>giphy-search</h1>
				<SearchResults></SearchResults>
			</div>
		);
	}
}

export default App;