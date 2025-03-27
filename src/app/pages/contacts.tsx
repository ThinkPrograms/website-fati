import '../css/contacts.css';
import { FaPhoneFlip } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Contacts = () => {
    return (
        <div className="content">
            <p className="contact-title">OTA YHTEYTTÄ:</p>
            <div className="contact-details">
                <div className="contact-side-text">
                    <p className="company-name">Fati rakennus OY</p>
                    <div className="contact-text">
                        <br />
                        <p className='space-under'>Fatmir Statovci</p>
                        <p><FaPhoneFlip size={18} /> 044 041 8293</p>
                        <p><HiOutlineMail size={24} className='icon-height-fix' />fati.ardi@hotmail.fi</p>
                        <br />
                        <p>Osoitetie 5</p>
                        <p>02394 Kauppakaupunki</p>
                        <br />
                        <p>Y-tunnus: 7643761-5</p>
                    </div>
                </div>
                <div className="contact-field">
                    <p>Nimi*</p>
                    <input className='email-field text-field' type="text" />
                    <p>Sähköposti*</p>
                    <input className='email-field text-field' type="email" />
                    <p>Puhelinnumero*</p>
                    <input className='email-field text-field' type="text" />
                    <p>Viesti</p>
                    <textarea className='email-content-field text-field' rows={8} name="contact-details" id="1"></textarea>
                    <button className='contact-send-btn'>Lähetä</button>
                </div>
            </div>
        </div>
    )
}
export default Contacts;