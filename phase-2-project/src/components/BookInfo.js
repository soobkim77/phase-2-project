import React from 'react';
import {
    Container,
    Header,
    Image
  } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import Review from './Review'




class BookInfo extends React.Component {
    state={
        showReview: false,
        review: "",
        bookReviews: []
    }

    componentDidMount = () => {
        let newtitle = this.props.book.title.split(" ").join("")
        fetch(`http://localhost:3000/reviews?title=${newtitle}`)
        .then(r => r.json())
        .then(res => this.setState({bookReviews: res}))
    }

    handleOnChange = (e) => {
        this.setState({review: e.target.value})
    }

    handleSubmit = (e, title) => {
        e.preventDefault()
        e.stopPropagation()
        let newtitle = title.split(" ").join("")
        let obj = {
            title: newtitle,
            review: this.state.review,
            user: this.props.user
        }
        fetch('http://localhost:3000/reviews', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(r => r.json()).then(res => {
            let newReviews = [...this.state.bookReviews]
            newReviews.push(res)
            this.setState({bookReviews: newReviews})
        })
    }

    render(){
        return (
            <Container className="ui cards" text>
                <Header>{this.props.book.title}</Header>
                <Image
                src={this.props.book.book_image}
                size="small"
                />
                <h4>By: {this.props.book.author}</h4>
                <p>{this.props.book.description}</p>
                <button className="ui basic blue button" onClick={() => this.props.add(this.props.book)} >Add to My List</button>
                <button className="ui basic blue button" onClick={()=>this.setState({showReview: true})}>Leave a Review!</button>
                {this.state.showReview ? <Review  change={this.handleOnChange} submit={this.handleSubmit} book={this.props.book}/> : null}
                <br/>
                <div className="ui grid">
                    {this.props.book.buy_links.map(link => {
                        return (
                            <a key={link.name} href={link.url}>{link.name}</a>
                        )
                    })}
                </div>
                <div>
                    {this.state.bookReviews.map(review => {
                        return (
                            <div>
                                <p>"{review.review}" <span>-{review.user}</span></p>
                            </div>
                        )
                    })}
                </div>
            </Container>
    )}
                }

export default BookInfo