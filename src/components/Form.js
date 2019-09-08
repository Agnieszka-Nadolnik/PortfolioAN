import React, {Component} from 'react';
import * as emailjs from 'emailjs-com';
import dataMail from './data/mail.js';
import Recaptcha from 'react-recaptcha';

class ContactForm extends Component {
    state = {
        username: '',
        email: '',
        message: '',
        info: '',
        isVerified: false,

        errors : {
            username: false,
            email: false,
            message: false,
        }
    }

    messages = {
        username_incorrect: 'Pole musi zostać wypełnione',
        email_incorrect: 'Brak znaku @ ',
        message_incorrect: "Proszę wypełnić pole",
    }


    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type;

        if(type === 'text' || type === 'email' || type === 'textarea') {
            const value = e.target.value;
    
            this.setState({
             [name]: value,
            });
        } 
    }

      verifyCallback = (response) => {
        console.log(response);
        if(response) {
            this.setState({
                isVerified: true,
            })
        }
      };


    handleSubmit = (e) => {
        e.preventDefault();
        const validation = this.formValidation();
        console.log(validation);
       
        if(validation.correct) {

            let service_id = dataMail.service;
            let template_id = dataMail.template;
            let user_id = dataMail.user;
        
            let params = {
              from_name: this.state.username,
              from_email: this.state.email,
              message_html: this.state.message,
              reply_to: this.state.email
            };
        
            emailjs.send(service_id, template_id, params, user_id);

            this.setState({
                username: '',
                email: '',
                message: '',
                info: 'Wiadomość została wysłana',

                errors : {
                    username: false,
                    email: false,
                    message: false,
                }
            });
        } else {
            this.setState({
                errors : {
                    username: !validation.username,
                    email: !validation.email,
                    message: !validation.message,
                }
            })
        }
    }

    formValidation = () => {
        let username = false;
        let email = false;
        let message = false;
        let correct = false;
        let isVerified = false;

        if(this.state.username.length > 0) {
            username = true;
        }
        if(this.state.email.indexOf('@') !== -1) {
            email = true;
        }
        if(this.state.message.length > 0) {
            message = true;
        }
        if(this.state.isVerified) {
            isVerified = true;
        }
        if(username && email && message && isVerified) {
            correct = true;
        }

        return ({
            correct,
            username,
            email,
            message,
            isVerified
        });
    }

    componentDidUpdate() {
        if(this.state.message !== '') {
            setTimeout(() => this.setState({ info: ''}), 10000)
        };
    };

    callback = () => {
        console.log('Done!!!!');
      };

    render() {

        return (
            <div id='contact' className="contact_form" style={{overflow: 'hidden'}}>
                <form onSubmit={this.handleSubmit}>
                    <input id='name' type="text" name="username" placeholder='Name' value={this.state.username} onChange={this.handleChange} />
                   {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
                    <input id='email'type="email" name="email" placeholder='Email' value={this.state.email} onChange={this.handleChange} />
                    {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
                    <textarea cols="30" rows="5" placeholder='Message' type='textarea' value={this.state.message} name='message' onChange={this.handleChange}></textarea>
                    {this.state.errors.message && <span>{this.messages.message_incorrect}</span>}
                    <div className="capt_style">
                        <Recaptcha
                            sitekey={dataMail.recaptcha}
                            render="explicit"
                            verifyCallback={this.verifyCallback}
                            onloadCallback={this.callback}
                        />
                    </div>
                    <button type='submit' value="Send" name='accept'>Wyślij wiadomość</button>
                </form>
                {this.state.info && <h3>{this.state.info}</h3>}
            </div>
        )
    }
}

export default ContactForm;