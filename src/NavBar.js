import Logo from "./coeursolidaire.png"
import Search from "./search.png"
import { Link, useHistory} from "react-router-dom/cjs/react-router-dom.min";
import Contact from "./Contact";
import Services from "./Services";
import AboutUs from "./AboutUs";
import GoHome from "./GoHome";
import { HandleRedirect } from "./HandleRedirect";
import { useState } from "react";

const NavBar = () => {

    const history = useHistory()
    const {GoToSignIn,RedirectHome} = HandleRedirect()

    const [lang, setLang]=useState("en");
    

    return ( 
        <nav className="navbar">
            <img src={Logo} alt="" onClick={()=>RedirectHome(history)}/>
            <img src={Search} alt="" id="searchIcon" />
            <input type="text" placeholder="Search for associations" />
            <div className="links">
                <Link to="/" onClick={GoHome}>Home</Link>
                <Link to="/" onClick={AboutUs}>About us</Link>
                <Link to="/" onClick={Services}>Services</Link>
                <Link to="/" onClick={Contact}>Contact</Link>
            </div>
            <button className="signin" onClick={()=>GoToSignIn(history)}>Sign in</button>
            <div className="language">
                <a onClick={()=>{lang=="en" ? setLang("fr") :setLang("en")}}>{lang}</a>
            </div>
        </nav>
     );
}
 
export default NavBar;