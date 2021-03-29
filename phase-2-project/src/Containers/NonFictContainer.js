
import Book from '../components/Book';

const nonFictContainer = () => {
    return (
        <div className="ui five column grid" belt>
                    {this.props.nList.map(book => { 
                        // console.log(book)
                        return <Book book={book} key={book.rank}/>
                        })}
                        <button onClick={this.props.moreN}>
                            More Books!
                        </button>
        </div>       
    )
}

export default nonFictContainer