import Book from '../components/Book';
import '../App.css'
import 'semantic-ui-css/semantic.min.css';

const GenreContainer = (props) => {
    return (
        <div>
            <div className="ui 5 column grid">
                <div className="ui centered cards">
                    {props.List.map(book => { 
                    return <Book book={book} key={book.rank} click={props.click}/>
                    })}
                </div>           
            </div>
            <button onClick={props.more} className="moreButton">
                More Books!
            </button>
        </div>
    )
}

export default GenreContainer