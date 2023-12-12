import Logo from "./coeursolidaire.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <img src={Logo} alt=""/>
            <input type="text" placeholder="Search for associations" />
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/AboutUs">About us</Link>
                <Link to="/Services">Services</Link>
                <Link to="/Contact">Contact</Link>
            </div>
            <button className="signin" onClick={() => alert('Sign in')}>Sign in</button>
            <div className="language">
                <a href="/">en</a>
            </div>
        </nav>
     );
}
 
export default NavBar;