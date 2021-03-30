import{Link} from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

const Book = (props) => {
    return(
    <div className="ui column book">
            <div className="ui card" onClick={() => props.click(props.book)}>
                <Image src={props.book.book_image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{props.book.title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Rank: {props.book.rank}</span>
                    </Card.Meta>
                    <Card.Description>
                    {props.book.author}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <span>{props.book.description}</span>
                </Card.Content>
                <Link to={`/book/${props.book.title}`} className="ui blue basic button">
                More Info
                </Link>
            </div>
    </div>
    )
}

export default Book