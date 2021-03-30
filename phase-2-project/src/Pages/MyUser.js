import React from 'react';
import Book from '../components/Book'

class MyUser extends React.Component {

    state={
        
    }

    render(){
        return(
            <div>
                <h4>Reading Wish List</h4>
                <div className="4 wide grid cards">
                    {this.props.myBooks.map(book => <Book book={book} click={this.props.bookInfo} added={this.props.added} remove={this.props.remove} />)}
                </div>
            </div>
        )
    }
}

export default MyUser