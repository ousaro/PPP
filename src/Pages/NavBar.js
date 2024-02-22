import Logo from "../imgs/coeursolidaire.png"
import Profile from "../imgs/Profile icon.png"
import ShearchIcon from "../imgs/search.png"
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import { useLinkContext } from '../Context/LinkContext';
import { useAuthenticationContext } from "../Context/AuthenticationContext";


const NavBar = () => {
    const [lang, setLang]=useState("en");
    const { isActiveHome, isActiveAbUs, isActiveService, isActivePartner,isActiveContact, handleLinkClick } = useLinkContext();
    const {isAuth} = useAuthenticationContext();

    // if you scroll the focus on the nav bar element are disabled
    window.addEventListener("wheel",function(event){
        if(event.deltaY !==0){
            handleLinkClick(false,false,false,false,false);
        }
    })


    return ( 
        <nav className="Navbar">
        
            <figure className="Nav_Logo">
                <Link to="/#home" onClick={()=>handleLinkClick(true,false,false,false,false)} ><img src={Logo} alt="CoeurSolidaire" width="1417" height="1890"/></Link>
            </figure>
            
            <section className="Nav_searchField">
                <img onClick={()=>alert("shearch")} className="Nav_searchField_Icon" src={ShearchIcon}
                alt="shearch Icon"></img>
                <input type="text" placeholder="Search for associations" />
            </section>

            <section className="Nav_links">
                <Link to="/#home"
                    onClick={()=>handleLinkClick(true,false,false,false,false)}
                    className={isActiveHome ? "active" : "notActive"}><span>Home</span></Link>
                <Link to="/#aboutUs" 
                    onClick={()=>handleLinkClick(false,true,false,false,false)}
                    className={isActiveAbUs ? "active color2" : "notActive"}><span className="nowrap">About us</span></Link>
                <Link to="/#services" 
                    onClick={()=>handleLinkClick(false,false,true,false,false)}
                    className={isActiveService ? "active" : "notActive"}><span>Services</span></Link>
                <Link to="/#Partner" 
                    onClick={()=>handleLinkClick(false,false,false,true,false)}
                    className={isActivePartner ? "active color2" : "notActive"}><span>Partners</span></Link>
                <Link to="/#contact" 
                    onClick={()=>handleLinkClick(false,false,false,false,true)}
                    className={isActiveContact ? "active color2" : "notActive"}><span>Contact</span></Link>
               
            </section>

           {isAuth && (<section className="Nav_Profile">
                <figure>
                    <img src={Profile} alt="Profile icon" width="1500" height="1500" />
                </figure>
            </section>) }

            {!isAuth && (<section className="Nav_AuthLinks" onClick={()=>handleLinkClick(false,false,false,false,false)}>
                <Link to={"/LogIn"}><span className="nowrap">log In</span></Link>
                <Link to={"/SignIn"}><span className="nowrap">sign In</span></Link>
            </section>) }


            <div className="Nav_language">
                <Link to="#" onClick={()=>{lang==="en" ? setLang("fr") :setLang("en")}}>{lang}</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;