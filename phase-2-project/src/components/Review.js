const Review = (props) => {
    return (
        <div>
            <form className="reviewForm" onSubmit={(e) => props.submit(e, props.book.title)}>
                <label> Review:
                    <input onChange={(e)=> {props.change(e)}} type="text"  name="review"/>
                </label>
                <input className="submitFormBtn" type="submit"/>
            </form>
        </div>
    )
}

export default Review