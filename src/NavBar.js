import Logo from "./coeursolidaire.png"
import { Link, useHistory} from "react-router-dom/cjs/react-router-dom.min";
import Contact from "./Contact";
import Services from "./Services";
import AboutUs from "./AboutUs";
import GoHome from "./GoHome";
import HandleSignInBt from "./HandleSignInBt";

const NavBar = () => {

    const history = useHistory()

    return ( 
        <nav className="navbar">
            <img src={Logo} alt=""/>
            <input type="text" placeholder="Search for associations" />
            <div className="links">
                <Link to="/" onClick={GoHome}>Home</Link>
                <Link to="/" onClick={AboutUs}>About us</Link>
                <Link to="/" onClick={Services}>Services</Link>
                <Link to="/" onClick={Contact}>Contact</Link>
            </div>
            <button className="signin" onClick={()=>HandleSignInBt(history)}>Sign in</button>
            <div className="language">
                <a href="/">en</a>
            </div>
        </nav>
     );
}
 
export default NavBar;