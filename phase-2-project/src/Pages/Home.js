import GenreContainer from '../Containers/GenreContainer'
import React, { Fragment, Component } from 'react'

class Home extends Component {
    render(){
        return (
            <Fragment>
                <GenreContainer List={this.props.fList} more={this.props.moreF}/>
                <br/>
                <br/>
                <GenreContainer List={this.props.nList} more={this.props.moreN}/>
            </Fragment>
        )
    }
}

export default Home