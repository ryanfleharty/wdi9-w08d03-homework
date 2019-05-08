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
                {gifList}
            </div>
        )
    }
}


export default GiphyResults;