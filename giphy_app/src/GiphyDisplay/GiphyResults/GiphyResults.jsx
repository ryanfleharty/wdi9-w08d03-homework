import React, {Component} from 'react';

class GiphyResults extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }



    render(){
        console.log(this.props.gifArray, 'gifArray in results component');
        
        // const gifList = this.props.gifArray.map((gif)=>{
        //     return(
        //         <div>
        //             <p>{gif.title}</p>
        //         </div>
        //     )
        // })

        return(
            <div>
                <h1>Sanity Check</h1>
                {}
            </div>
        )
    }
}


export default GiphyResults;