import{Link} from 'react-router-dom';
import '../App.css'


const Book = (props) => {
    return(
    <div className="bookCard" onClick={() => props.click(props.book)}>
            
         <div className="cover">      
            <img className="bookImage" src={props.book.book_image}  />
          </div>
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
                    onClick={() => props.remove(props.book.id)}>x</button> : null}
            </div> 
        </div>
    </div>
    )
}

export default Book