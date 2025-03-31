const ContactUs = () => {
    return (
        <div>
            <p className="contact-title">Ota yhteyttä</p>
            <div className="contact-field">
                <p>Nimi*</p>
                <input className='email-field text-field' type="text" />
                <p>Sähköposti*</p>
                <input className='email-field text-field' type="email" />
                <p>Puhelinnumero*</p>
                <input className='email-field text-field' type="text" />
                <p>Viesti</p>
                <textarea className='email-content-field text-field' rows={8} name="contact-details" id="1"></textarea>
                <button className='send-btn'>Lähetä</button>
            </div>
        </div>
    )
}

export default ContactUs;