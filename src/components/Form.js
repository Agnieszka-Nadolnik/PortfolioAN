import React, {Component} from 'react';
import * as emailjs from 'emailjs-com';
import dataMail from './data/mail.js';
import Recaptcha from 'react-recaptcha';

class ContactForm extends Component {
    state = {
        username: '',
        email: '',
        message: '',
        accept: false,
        info: '',
        isVerified: false,

        errors : {
            username: false,
            email: false,
            message: false,
            accept: false,
            isVerified: false,
        }
    }

    messages = {
        username_incorrect: 'Pole musi zostać wypełnione',
        email_incorrect: 'Brak znaku @ ',
        message_incorrect: "Proszę wypełnić pole",
        accept_incorrect: 'Brak zgody',
    }


    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type;

        if(type === 'text' || type === 'email' || type === 'textarea') {
            const value = e.target.value;
    
            this.setState({
             [name]: value,
            });
        } else if( type === 'checkbox') {
            const checked = e.target.checked;
    
            this.setState({
             [name]: checked,
            });
        } 
    }


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
                accept: '',
                info: 'Wiadomość została wysłana',

                errors : {
                    username: false,
                    email: false,
                    message: false,
                    accept: false,
                }
            });



        } else {
            this.setState({
                errors : {
                    username: !validation.username,
                    email: !validation.email,
                    message: !validation.message,
                    accept: !validation.accept,
                }
            })
        }
    }

    formValidation = () => {
        let username = false;
        let email = false;
        let message = false;
        let accept = false;
        let correct = false;

        if(this.state.username.length > 0) {
            username = true;
        }
        if(this.state.email.indexOf('@') !== -1) {
            email = true;
        }
        if(this.state.message.length > 0) {
            message = true;
        }
        if(this.state.accept) {
            accept = true;
        }
        if(username && email && message && accept) {
            correct = true;
        }

        return ({
            correct,
            username,
            email,
            message,
            accept
        })
    }

    componentDidUpdate() {
        if(this.state.message !== '') {
            setTimeout(() => this.setState({ info: ''}), 3000)
        }
    }

    callback = () => {
        console.log('Done!!!!');
      };

     verifyCallback = (response) => {
        if(response) {
            this.setState({
             isVerified: true,
            })
        }
      };
    render() {

        return (
            <div id='contact' className="contact_form" >
                <form onSubmit={this.handleSubmit}>
                    <input id='name' type="text" name="username" placeholder='Name' value={this.state.username} onChange={this.handleChange} />
                   {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
                    <input id='email'type="email" name="email" placeholder='Email' value={this.state.email} onChange={this.handleChange} />
                    {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
                    <textarea cols="30" rows="5" placeholder='Message' type='textarea' value={this.state.message} name='message' onChange={this.handleChange}></textarea>
                    {this.state.errors.message && <span>{this.messages.message_incorrect}</span>}
                    <label htmlFor="accept"><input type="checkbox" onChange={this.handleChange} checked={this.state.accept} name='accept'/>Wyrażam zgodę na przetwarzanie moich danych</label>
                    {this.state.errors.accept && <span>{this.messages.accept_incorrect}</span>}
                    <button type='submit' value="Send" name='accept'>Wyślij wiadomość</button>
                    <Recaptcha
                        sitekey={dataMail.recaptcha}
                        render="explicit"
                        verifyCallback={this.verifyCallback}
                        onloadCallback={this.callback}
                    />
                </form>
                {this.state.info && <h3>{this.state.info}</h3>}
            </div>
        )
    }
}

export default ContactForm;