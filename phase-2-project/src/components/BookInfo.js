import React from 'react';

import {
    Container,
    Header,
    Image
  } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import Review from './Review'
import '../App.css'





class BookInfo extends React.Component {
    state={
        showReview: false,
        review: "",
        bookReviews: [],
        reviewButton: true 
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
            this.setState({bookReviews: newReviews, showReview: false})
        })
    }

    render(){
        return (
            <div className="highlightContainer" >
                <div className="highlightLeft">
                    <img src={this.props.book.book_image}  />
                    
                    
                    
                    
                </div>
                <div className="highlightRight">
                    <div>
                        <h2 className="bookTitle">"{this.props.book.title}"</h2>
                        <h4>by: {this.props.book.author}</h4>
                    </div>
                    <div className="description">
                        <p>{this.props.book.description}</p>
                    </div>
                    <div className="bookReviews">
                    <h4>Reviews</h4>
                    {this.state.bookReviews.map(review => {
                        return (
                            <div>
                                <p><span className="commenter">{review.user} : </span>"{review.review}" </p>
                            </div>
                        )
                    })}
                    </div>
                     <div className="buyLinks">
                        {this.props.book.buy_links.map(link => {
                            return (
                                <a key={link.name} target="_blank" href={link.url}>{link.name}</a>
                            )
                        })}
                    </div>
                </div>
                <div className="highlightBottomLeft">
                    <button className="addBtn" onClick={() => this.props.add(this.props.book)} >save to my books</button>
                </div>
                <div className="highlightBottomRight">
                    
                    {this.state.showReview ? <Review  className="reviewForm" change={this.handleOnChange} submit={this.handleSubmit} book={this.props.book}/> : <button className="reviewBtn" onClick={()=>this.setState({showReview: true, reviewButton:false})}>leave a review</button>}
                </div>
                
            </div>
    )}
                }

export default BookInfo