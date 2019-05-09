import React, { Component } from 'react';
import GifSearchForm from './GifSearchForm/GifSearchForm';



class GifContainer extends Component {
    constructor() {
        super();
        this.state = {
            giphy: []
        }
    }
    componentDidMount() {
        this.searchGiphy({ search: '' })
    }
    searchGiphy = async (formData) => {
        const giphyAPI = await `http://api.giphy.com/v1/gifs/search?q=${formData.giphy}&api_key=mu3hZW0PniYp8xhwcpzGeHLlgF1C2m3m`
        fetch(giphyAPI)
            .then((res) => res.json())
            .then((gif) => {
                this.setState({
                    giphy: gif.data
                })
            })
    }
    render() {
        const gifBois = this.state.giphy.map((gifs) => {
            return (
                <div>
                    <img src={gifs.images.preview_gif.url} alt='gifboi' />
                </div>
            )
        })
        return (
            <div>
                <h1>What gif is your mood today?</h1>
                <GifSearchForm searchGiphy={this.searchGiphy} />
                {gifBois}
            </div>
        )
    }







}





export default GifContainer;