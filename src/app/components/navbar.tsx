import '../css/navbar.css'
import { NavLink } from "react-router";

const Navbar = () => {

    return (
        <div className="navbar">
            <NavLink to="/" className='logo'>Fatin Rakennusfirma</NavLink>
            <div className='menu'>
                <p className='menu-item'>Tietoa yrityksestä</p>
                <p className='menu-item'>Palvelut</p>
                <p className='menu-item'>Referenssit</p>
                <NavLink to="/yhteystiedot" className='menu-item'>Yhteystiedot</NavLink>
            </div>
        </div>
    )
}
export default Navbar;