import React, {Component} from 'react';

class GiphyResults extends Component {
    



    render(){
        console.log(this.props.gifArray, 'gifArray in results component');

        const gifList = this.props.gifArray.map((gif)=>{
            return(
                <div>
                    <p>{gif.title}</p>
                    <img src={gif.images.original.url}></img>
                </div>
            )
        })

        return(
            <div>
                <h1>Sanity Check</h1>
                {gifList}
            </div>
        )
    }
}


export default GiphyResults;