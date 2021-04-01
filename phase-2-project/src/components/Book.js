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
        <div className="lowerBoxContainer">
            <div className="rankBox">
                <div>
                    <p>rank</p>
                </div>
                <div>
                    <p className="chartPosition">{props.book.rank}</p>
                </div>
            </div>
           <div className="buttonBox">
                <Link to={`/book/${props.book.title}`} className="abtBtn">more info</Link>
                {props.added ? <button 
                    className="btn" 
                    id={props.book.id} 
                    onClick={() => props.remove(props.book.id)}/> : null}
            </div> 
        </div>
    </div>
    )
}

export default Book