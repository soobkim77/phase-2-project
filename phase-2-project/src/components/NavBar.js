import {Link} from 'react-router-dom'

const NavBar = props => {
    return(
    <div className="navbar">
        <Link to="/books" className="navBtn">Home</Link>
        <Link to="/user" className="navBtn">My Page</Link>
        <Link to="/" className="navBtn" onClick={() => props.logout()} >LogOut</Link>
    </div>
    )
}

export default NavBar