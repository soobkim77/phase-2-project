import React from 'react';
import Book from '../components/Book'

class MyUser extends React.Component {

    state={
        
    }

    render(){
        return(
            <div>
                <h4>Reading Wish List</h4>
                <div>
                    {this.props.myBooks.map(book => <Book book={book}/>)}
                </div>
            </div>
        )
    }
}

export default MyUser