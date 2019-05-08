import React, {Component} from 'react'

class GiphySearchContainer extends Component {
    constructor (){
        super()
        this.state = {
            giphy: []
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        console.log(this.props + '<<<<<<<<<<<<<<<<<')
        this.props.searchGiphys(this.state);
    }
    // render(){
    //     return <form onSubmit={this.handleSubmit}>
    //     Which countries news would you like? <input onChange = {this.handleChange} type="text" name="search" />
    //     <input type="submit" />
    //     </form>
    // }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
    What Giphy would you like to see? <input onChange = {this.handleChange} type ='text' name='search'/>
               <input type = 'submit'/>
           </form>
        )
    }
}


export default GiphySearchContainer 