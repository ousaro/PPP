import Logo from "./coeursolidaire.png"

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <img src={Logo} alt=""/>
            <input type="text" placeholder="Search for associations" />
            <div className="links">
                <a href="/">Home</a>
                <a href="/">About us</a>
                <a href="/">Services</a>
                <a href="/">Contact</a>
            </div>
            <button className="signin" onClick={() => alert('Sign in')}>Sign in</button>
            <div className="language">
                <a href="/">en</a>
            </div>
        </nav>
     );
}
 
export default NavBar;