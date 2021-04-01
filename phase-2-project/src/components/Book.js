import{Link} from 'react-router-dom';


const Book = (props) => {
    return(
    <div className="bookCard" onClick={() => props.click(props.book)}>
            
         <div className="cover">      
            <img className="bookImage" src={props.book.book_image}  />
            {/* <p className="hoverInfo">{props.book.description}</p> */}
        </div>     
        {/* <div className="description">   
            <p className="title">{props.book.title}<br/>
                <span className="author"></span>{props.book.author}</p>
            </div> */}
        {/* <p className='date'>Rank: {props.book.rank}</p>  */}
              
            {/* <p className="description"><span>{props.book.description}</span></p> */}
            <Link to={`/book/${props.book.title}`} className="amzBtn">about</Link>
            {props.added ? <button 
                className="abtBtn" 
                id={props.book.id} 
                onClick={() => props.removeBook(props.book.id)}/> : null}
            
    </div>
    )
}

export default Book