import React, {Component} from 'react';
import ContactForm from './Form.js';

class Contact extends Component {
    render() {
        return (
            <section className="contact_container">
                <h5>Kontakt</h5>
                <div className="contact_data">
                    <div className="contact_section">
                    <p><i className="fas fa-phone"></i>Telefon: +48 500 866 910</p>
                    <p><i className="far fa-envelope"></i>Mail: agnieszka.nadolnik@hotmail.com</p>
                        <div className='contact_icon'>
                            <a href="https://github.com/Agnieszka-Nadolnik" target='blank'><i className="fab fa-github-square"></i></a>
                            <a href="https://www.linkedin.com/in/agnieszka-nadolnik/" target='blank'><i className="fab fa-linkedin"></i></a>      
                        </div>
                    </div>
                    <ContactForm/>
                </div>
            </section>
        )
    }
}
export default Contact;