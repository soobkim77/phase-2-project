import Book from '../components/Book';
import '../App.css'


const GenreContainer = (props) => {
    return (
        <div>
            <div className="bookContainer">
                
                    {props.List.map(book => { 
                    return <Book book={book} key={book.rank} click={props.click}/>
                    })}
       
            </div>
            <button onClick={props.more} className="moreButton">
                more books!
            </button>
        </div>
    )
}

export default GenreContainer