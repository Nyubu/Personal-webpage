import React from 'react';
import './Contact.css';
import './modal.css'
import axios from 'axios';

import Modal from 'react-modal';
// import customStyles from './ModalStyles'
import githubLogo from './logos/github-logo.png';
import linkedinLogo from './logos/linkedin-logo.png';
import pinterestLogo from './logos/pinterest-logo.png';
import youtubeLogo from './logos/youtube-logo.png';
import twitterLogo from './logos/twitter-logo.png';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messengerName: '',
            contact: '',
            subject: '',
            message: '',
            popUpMessage: '',
            popUpError: false,
            showModal: false        
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    openModal(popUpMessage, hasError) {
        this.setState( {popUpMessage: popUpMessage, showModal: true, popUpError: hasError})
      }

    afterOpenModal = () => {
        document.body.style.overflow = 'hidden';
    }
    
    closeModal = () => {
        document.body.removeAttribute('style')
        this.setState( {showModal: false})
    }

    

  
    // Handle changes in input fields
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value});
    }  

    // Reset form of controlled component
    resetForm() {
        this.setState({
            messengerName: '',
            contact: '',
            subject: '',
            message: ''
        });
    }

    // Handle when user clicks submit button
    handleSubmit(event){

        
        event.preventDefault();
        let _popUpMessage = "Thanks! Your message has been sent to my email. If you left any contact information, I'll be sure to reach out to you shortly.";
        this.openModal(_popUpMessage, false)
        const { messengerName,  contact, subject, message } = this.state;

        // Send data express backend
        axios({
            method: "POST", 
            // url:"http://134.209.172.207:5000/express_backend",
            url:"http://134.209.sghsghsgh000/express_backend",
            // url:"localhost:5000/express_backend",
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({
                messengerName,  
                contact, 
                subject, 
                message 
            })
        }).then((response)=>{
            if (response.data.msg === 'success'){
                
                let _popUpMessage = "Thanks! Your message has been sent to my email. If you left any contact information, I'll be sure to reach out to you shortly.";
                this.openModal(_popUpMessage, false)

                this.resetForm();
            }else if(response.data.msg === 'fail'){
                let _popUpMessage = "Oops, something went wrong. Try contacting me a different way.";
                
                this.openModal(_popUpMessage, true)
            }
        }).catch(() => console.log("Can’t access API. Blocked by browser?"))
    }
  
    render() {
        return (
            <section className="contact" id="contact">
                <h2 className="section__title section__title--contact">
                    Contact Me          
                </h2>
                
                <div className="contact-container">
                    <form className="contact-form" onSubmit={this.handleSubmit} autoComplete="off">
                        <p className="contact-form__title">Send a Quick Message</p>
                        <input
                            className="contact-form__text contact-form__name"
                            placeholder="Name *" 
                            type="text" 
                            name="messengerName" 
                            value={this.state.messengerName} 
                            onChange={this.handleChange} 
                        />
                        <input 
                            className="contact-form__text contact-form__contact"
                            placeholder="Contact Information" 
                            type="text" 
                            name="contact" 
                            value={this.state.contact} 
                            onChange={this.handleChange} 
                        />
                        <input 
                            className="contact-form__text contact-form__subject"
                            placeholder="Subject *"
                            type="text" 
                            name="subject"  
                            value={this.state.subject} 
                            onChange={this.handleChange} 
                        />
                        <textarea
                            className="contact-form__text contact-form__message"
                            id="textbox"
                            placeholder="Message *"
                            name="message" 
                            value={this.state.message} 
                            onChange={this.handleChange} 
                        >                    
                        </textarea>
                        <input className="contact-form__submit-btn" type="submit" value="Send Message" />
                    </form>

                    <Modal
                        className="modal"
                        overlayClassName="modal-overlay"
                        isOpen={this.state.showModal}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        // style={customStyles}
                        contentLabel="Email Modal"
                        preventScroll={true}
                    >
                        { this.state.popUpError 
                            ? <h3 className="error">Error!</h3> 
                            : <h3 className="success">Message has been sent!</h3>}                            
                        <div>{this.state.popUpMessage}</div>
                        <button className="modal-button" onClick={this.closeModal}>close</button>

                    </Modal>
                    
                    <div className="contact-list">
                        <ul className="contacts">
                            <li className="contact-item">
                                <i className="fab fa-discord"></i>
                                <p className="contact-info"> Paper Moon#2062</p>
                            </li>
                            <li className="contact-item">
                                <i className="fas fa-mobile-alt"></i>
                                <p className="contact-info">(469) 583-5851</p>
                            </li>
                            <li className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <p className="contact-info">huynh5851@gmail.com</p>
                            </li>
                        </ul>
                        <div className="contact-list-wrapper">
                            <a  className="contact-link" href="https://youtube.com" target="blank">    
                                <img src={youtubeLogo} className="contact-logo" alt="something"/>
                                <p className="contact-name">Youtube</p>
                            </a>
                            <a  className="contact-link" href="https://pinterest.com" target="blank">
                                <img src={pinterestLogo} className="contact-logo" alt="pinterest logo"/>
                                <p className="contact-name">Pinterest</p>
                            </a>
                            <a  className="contact-link" href="https://twitter.com" target="blank">
                                <img src={twitterLogo} className="contact-logo" alt="twitter logo"/>
                                <p className="contact-name">Twitter</p>
                            </a>
                            <a  className="contact-link" href="https://linkedin.com" target="blank">
                                <img src={linkedinLogo} className="contact-logo" alt="linkedin logo"/>
                                <p className="contact-name">Linkedin</p>
                            </a>
                            <a  className="contact-link" href="https://github.com" target="blank">
                                <img src={githubLogo} className="contact-logo" alt="github logo"/>
                                <p className="contact-name">Github</p>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
  }

  export default Contact;


  // When the event DOMContentLoaded occurs, it is safe to access the DOM
  document.addEventListener('DOMContentLoaded', function() {
    
    // Check for 'Tab' keystrokes
    document.getElementById('textbox').addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
          e.preventDefault();
          var start = this.selectionStart;
          var end = this.selectionEnd;
      
          // set textarea value to: text before caret + tab + text after caret
          this.value = this.value.substring(0, start) +
            "\t" + this.value.substring(end);
      
          // put caret at right position again
          this.selectionStart =
            this.selectionEnd = start + 1;
        }
      });
})