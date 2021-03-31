import React from 'react';


const BookInfo = (props) => {
    return (
        <div text>
            <h1>{props.book.title}</h1>
            <img src={props.book.book_image}/>
            <h4>By: {props.book.author}</h4>
            <p>{props.book.description}</p>
            <button className="button" onClick={() => props.add(props.book)} >Add to My List</button>
            <br/>
            <div className="">
                {props.book.buy_links.map(link => {
                    return (
                        <a key={link.name} href={link.url}>{link.name}</a>
                    )
                })}
            </div>
        </div>
    )
}

export default BookInfo