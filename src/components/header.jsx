import logo from "../assets/LOGO.png"
import { NavLink } from "react-router-dom"

function Header (){
    return(
        <header>
            <img src={logo} className="logo-kasa" alt="logo" />
            <nav className="header-nav">
                <NavLink to="/"  className={({ isActive }) => isActive ? "active-link" : undefined}>Accueil</NavLink>
                <NavLink to="/about"  className={({ isActive }) => isActive ? "active-link" : undefined}>À propos</NavLink>
            </nav>
        </header>
    )
}
export default Header