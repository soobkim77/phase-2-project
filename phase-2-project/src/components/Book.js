import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const Book = (props) => {
    return(
    <div className="ui column">
        <div className="ui card">
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
        </div>
    </div>
    )
}

export default Book