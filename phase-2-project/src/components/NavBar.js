import {Link} from 'react-router-dom'

const NavBar = props => {
    return(
    <div className={`ui inverted grey menu`}>
        <Link to="/books" className="ui button">Home</Link>
        <Link to="/user" className="ui button">My Page</Link>
    </div>
    )
}

export default NavBar