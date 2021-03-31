const Review = (props) => {
    return (
        <div>
            <form onSubmit={(e) => props.submit(e, props.book.title)}>
                <label> Review:
                    <input onChange={(e)=> {props.change(e)}} type="text" name="review"/>
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Review