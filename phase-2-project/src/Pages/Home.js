import GenreContainer from '../Containers/GenreContainer'
import React, { Fragment, Component } from 'react'


class Home extends Component {
    render(){
        return (
            <div className="genreBarContainer" >
                <div className="genreBar">
                    <h1>Fiction Bestsellers</h1>
                    <GenreContainer List={this.props.fList} more={this.props.moreF} click={this.props.click} />
                </div>
                <br/>
                <br/>
                <div className="genreBar">
                    <h1>Non-Fiction Bestsellers</h1>
                    <GenreContainer List={this.props.nList} more={this.props.moreN} click={this.props.click} />
                </div>
                <br/>
                <br/>
                <div className="genreBar">
                    <h1>My Recommendations</h1>
                    <GenreContainer List={this.props.myList} more={this.props.moreMy} click={this.props.click} />
                </div>
           </div> 
        )
    }
}

export default Home