import { Link } from "react-router-dom"
import  '../css/navbar.css'

const NavBar = () => {
    return (
        <div id="navbar">
            <Link to='/'> <p>home</p> </Link>
            <Link to='/login'> <p>Login</p> </Link>
            <Link to='/register'> <p>Register</p> </Link>
      </div>
    )
}

export default NavBar