import React from 'react';
import Book from '../components/Book'

class MyUser extends React.Component {

    state={
        added: true,
        change: false
    }

    handleChange = () => {
        this.setState({change: true})
    }

    render(){
        return(
            <div>
                <h4>Reading Wish List</h4>
                <div className="4 column grid">
                    {this.props.myBooks.map(book => <Book book={book} click={this.props.bookInfo} added={this.state.added} remove={this.props.remove} key={book.id}/>)}
                </div>
                <div>
                    <button onClick={()=>this.handleChange()} >Edit My Preferences</button>
                    <form onSubmit={(e) => this.props.pref(e)} onChange={(e) => this.props.taste(e)}>
                        {this.state.change ? this.props.lists.map(list => {
                            return (
                            <div key={list.list_name_encoded}>
                                <input type="radio" value={list.list_name_encoded} id={list.display_name} name="list" /> 
                                <label htmlFor={list.display_name}>{list.display_name}</label>
                            </div>
                        )}) : null }
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default MyUser