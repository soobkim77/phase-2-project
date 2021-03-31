import React from 'react';
import {
    Container,
    Header,
    Image
  } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

const BookInfo = (props) => {
    return (
        <Container text>
            <Header>{props.book.title}</Header>
            <Image
            src={props.book.book_image}
            size="small"
            />
            <h4>By: {props.book.author}</h4>
            <p>{props.book.description}</p>
            <button className="ui basic blue button" onClick={() => props.add(props.book)} >Add to My List</button>
            <br/>
            <div className="ui grid">
                {props.book.buy_links.map(link => {
                    return (
                        <a key={link.name} href={link.url}>{link.name}</a>
                    )
                })}
            </div>
        </Container>
    )
}

export default BookInfo