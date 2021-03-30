import GenreContainer from '../Containers/GenreContainer'
import React, { Fragment, Component } from 'react'


class Home extends Component {
    render(){
        return (
            <Fragment>
                <GenreContainer List={this.props.fList} more={this.props.moreF} click={this.props.click} />
                <br/>
                <br/>
                <GenreContainer List={this.props.nList} more={this.props.moreN} click={this.props.click}/>
                <br/>
                <br/>
                <GenreContainer List={this.props.myList} more={this.props.moreMy} click={this.props.click} />
            </Fragment>
        )
    }
}

export default Home