import '../css/contacts.css';
import ContactUs from '../components/contactUs';
import ContactInfo from '../components/contactInfo';

const Contacts = () => {
    return (
        <div className="content">
            <div className="contact-details">
                <ContactUs />
                <div className="contact-side-text">
                    <ContactInfo />
                </div>
            </div>
        </div>
    )
}
export default Contacts;