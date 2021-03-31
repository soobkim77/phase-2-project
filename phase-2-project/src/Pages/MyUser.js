import React from 'react';
import Book from '../components/Book'

class MyUser extends React.Component {

    state={
        added: true
    }

    render(){
        return(
            <div>
                <h4>Reading Wish List</h4>
                <div className="4 column grid">
                    {this.props.myBooks.map(book => <Book book={book} click={this.props.bookInfo} added={this.state.added} remove={this.props.remove} key={book.id}/>)}
                </div>
            </div>
        )
    }
}

export default MyUser