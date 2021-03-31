import{Link} from 'react-router-dom';


const Book = (props) => {
    return(
    <div className="bookCard">
            <div className="" onClick={() => props.click(props.book)}>
                <img className="bookImage" src={props.book.book_image}  />
                <div>
                    <h2 className="title">{props.book.title}</h2>
                    <div><span className='date'>Rank: {props.book.rank}</span></div>
                    <h4>{props.book.author}</h4>
                </div>
                <p className="description"><span>{props.book.description}</span></p>
                <Link to={`/book/${props.book.title}`} className="ui blue basic button">
                About this book
                </Link>
                {props.added ? <button className="abtBtn" id={props.book.id} onClick={() => props.remove(props.book.id)}>Remove</button> : null}
            </div>
    </div>
    )
}

export default Book