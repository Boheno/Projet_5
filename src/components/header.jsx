import logo from "../assets/LOGO.png"
import { Link } from "react-router-dom"

function Header (){
    return(
        <header>
            <img src={logo} className="logo-kasa" alt="logo" />
            <nav className="header-nav">
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </header>
    )
}
export default Header