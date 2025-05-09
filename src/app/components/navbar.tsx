import '../css/navbar.css'
import { NavLink } from "react-router";

const Navbar = () => {

    return (
        <div className="navbar prevent-select">
            <NavLink to="/" className='logo'>Fatin Rakennus Tmi</NavLink>
            <div className='menu'>
            <NavLink to="/" className='menu-item'>Tietoa yrityksestä</NavLink>
                <NavLink to="/palvelut" className='menu-item'>Palvelut</NavLink>
                <p className='menu-item'>Referenssit</p>
                <NavLink to="/yhteystiedot" className='menu-item'>Yhteystiedot</NavLink>
            </div>
        </div>
    )
}
export default Navbar;