import React, {Component} from 'react';

import SearchBox from '../SearchBox/SearchBox';

class SearchResults extends Component
{
	constructor()
	{
		super()
		this.state =
		{
			results:
			{
				data: []
			}
		}
	}

	handleSearch = async (input, e) =>
	{
		e.preventDefault();
		//console.log(await input.searchterms);
		//Now we have the search terms from the search box, in input.searchterms

		const temp = await fetch('https://api.giphy.com/v1/gifs/search?q=' + input.searchterms + '&api_key=kPX2zaN2zSBQOj68R7Org9XX9M3ZXK1B');
		const results = await temp.json();
		console.log(await results);
		this.setState(
		{
			results: await results
		});
		//console.log(await this.state.results.data[0]);
	}

	listOfGifs = () =>
	{
		//Returns some <img>s of gifs from the state
		return this.state.results.data.map((gif) =>
		{
			const url = "https://i.giphy.com/media/" + gif.id + "/giphy.webp";
			return(
				<img src={url}/>
			);
		});
	}

	render()
	{
		return(
			<div>
				<SearchBox handleSearch={this.handleSearch}></SearchBox>
				<ul>
					{
						this.state.results.data.map((gif) =>
						{
							return(
								<img src={"https://i.giphy.com/media/" + gif.id + "/giphy.webp"}/>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

export default SearchResults;