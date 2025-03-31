import { FaPhoneFlip } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const ContactInfo = () => {
    return (
        <>
            <p className="company-name">Fatin Rakennus Tmi</p>
            <div className="contact-text">
                <br />
                <p className='space-under'>Fatmir Statovci</p>
                <p><FaPhoneFlip size={18} /> 044 041 8293</p>
                <p><HiOutlineMail size={24} className='icon-height-fix' />fati.ardi@hotmail.fi</p>
                <br />
                <p>Puistopiha 2 A 5</p>
                <p>02610 Espoo</p>
                <br />
                <p>Y-tunnus: 3182951-6</p>
            </div>
        </>
    )
}

export default ContactInfo;
