import {Link} from 'react-router-dom'

const NavBar = props => {
    return(
    <div className="navbar">
        <div className="navLinks">
            <Link to="/books" className="navBtn">home</Link>
            <Link to="/user" className="navBtn">my page</Link>
        </div>
        <div className="navLogo">
            <h1>gitLit</h1>
        </div>
    </div>
    )
}

export default NavBar