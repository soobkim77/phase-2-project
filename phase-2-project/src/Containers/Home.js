import Book from '../components/Book';
import React, { Fragment, Component } from 'react'

class Home extends Component {
    render(){
        return (
            <Fragment>
                <div className="ui five column grid" belt>
                    {this.props.fList.map(book => { 
                        // console.log(book)
                        return <Book book={book} key={book.rank}/>
                        })}
                        <button onClick={this.props.moreF}>
                            More Books!
                        </button>
                </div>
                <div className="ui five column grid" belt>
                    {this.props.nList.map(book => { 
                        // console.log(book)
                        return <Book book={book} key={book.rank}/>
                        })}
                        <button onClick={this.props.moreN}>
                            More Books!
                        </button>
                </div>

                </Fragment>
        )
    }
}

export default Home