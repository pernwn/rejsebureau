import { NavLink } from "react-router-dom";
import travelLogo from './img/airplane.png';

export default function Nav() {
    return (
        <nav className="nav">
            <a href="/">
                <img src={travelLogo} className="logo" alt="Logo" />
            </a>

            <div className="navLinks">
                <NavLink to="/" className="navL">Home</NavLink>
                <NavLink to="/travel" className="navL">Travels</NavLink>
                <NavLink to="/about" className="navL">About</NavLink>
            </div>

        </nav>

    );
}

export function Footer(){
    return(
        <footer>
            <h4>Address</h4>
            <h4>Phone</h4>
            <h4>E-mail</h4>

            <img src="" alt="" />
            <img src="" alt="" />
        </footer>
    )
}

/*<a href="https://www.flaticon.com/free-icons/travel" title="travel icons">Travel icons created by Freepik - Flaticon</a> */