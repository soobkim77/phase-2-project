import GenreContainer from '../Containers/GenreContainer'
import React, { Component } from 'react'


class Home extends Component {
    render(){
        return (
            <div className="genreBarContainer" >
                <div className="genreBar">
                    <h1>fiction bestsellers</h1>
                    <GenreContainer List={this.props.fList} more={this.props.moreF} click={this.props.click} />
                </div>
                <br/>
                <br/>
                <div className="genreBar">
                    <h1>non-fiction bestsellers</h1>
                    <GenreContainer List={this.props.nList} more={this.props.moreN} click={this.props.click} />
                </div>
                <br/>
                <br/>
                <div className="genreBar">
                    <h1>my suggestions</h1>
                    <GenreContainer List={this.props.myList} more={this.props.moreMy} click={this.props.click} />
                </div>
           </div> 
        )
    }
}

export default Home