import '../css/footer.css';
import ContactInfo from './contactInfo';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="contact-info">
                <ContactInfo/>
                <button className='contacts-btn'><NavLink to="/yhteystiedot" className='menu-item'>Ota yhteyttä</NavLink></button>
            </div>
            <div className='footer-elements'>
                <p>© Copyright 2025</p>
            </div>
        </div>
    )
}
export default Footer;