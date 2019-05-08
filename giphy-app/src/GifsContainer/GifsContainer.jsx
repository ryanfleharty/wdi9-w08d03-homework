import React, { Component } from 'react';

class GifsContainer extends Component {
    render(){
        console.log(this.props)
        return (
            <div>
                { this.props.results }
            </div>
        )
    }
}

export default GifsContainer;