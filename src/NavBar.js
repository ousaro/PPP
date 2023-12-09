import Logo from "./coeursolidaire.png"

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <img src={Logo}/>
            <input type="text" placeholder="Search for associations" />
            <div className="links">
                <a href="/">Home</a>
                <a href="/">About us</a>
                <a href="/">Services</a>
                <a href="/">Contact</a>
               
            </div>
            <button className="signin">Sign in</button>
           
        </nav>
     );
}
 
export default NavBar;