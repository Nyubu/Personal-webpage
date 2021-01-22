import React from 'react';
import './Contact.css';

import mediumLogo from './logos/medium-logo.png';
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
            message: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
        alert('Thanks! Your message has been sent to my email. If you left your contact information')
    //   alert('The form has been submitted: ' + 
    //             this.state.messengerName + '/' +
    //             this.state.contact + '/' +
    //             this.state.message);
      event.preventDefault();
    }
  
    render() {
      return (
        <section className="contact" id="contact">
        <h2 className="section__title section__title--contact">
            Contact Me          
        </h2>
        
        <div className="contact-container">
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <p className="contact-form__title">Send a Quick Message</p>
                <input
                    className="contact-form__text contact-form__name"
                    placeholder="Name" 
                    type="text" 
                    name="messengerName" 
                    value={this.state.messengerName} 
                    onChange={this.handleChange} 
                />
                <input 
                    className="contact-form__text contact-form__contact"
                    placeholder="(Optional) Contact Information" 
                    type="text" 
                    name="contact" 
                    value={this.state.contact} 
                    onChange={this.handleChange} 
                />
                <input 
                    className="contact-form__text contact-form__subject"
                    placeholder="Subject"
                    type="text" 
                    name="subject"  
                    value={this.state.subject} 
                    onChange={this.handleChange} 
                />
                <textarea
                    className="contact-form__text contact-form__message"
                    id="textbox"
                    placeholder="Message"
                    name="message" 
                    value={this.state.message} 
                    onChange={this.handleChange} 
                >
                    
                </textarea>
                <input className="contact-form__submit-btn" type="submit" value="Send Message" />
            </form>
            <div className="contact-list">
                <div></div>
                <a  className="contact-link" href="https://youtube.com" target="blank">    
                    <img src={youtubeLogo} className="contact-logo" alt="something"/>
                    <p className="contact-name">Youtube</p>
                </a>
                <a  className="contact-link" href="https://linkedin.com" target="blank">
                    <img src={linkedinLogo} className="contact-logo" alt="linkedin logo"/>
                    <p className="contact-name">Linkedin</p>
                </a>
                <a  className="contact-link" href="https://twitter.com" target="blank">
                    <img src={twitterLogo} className="contact-logo" alt="twitter logo"/>
                    <p className="contact-name">Twitter</p>
                </a>
                <a  className="contact-link" href="https://medium.com" target="blank">
                    <img src={mediumLogo} className="contact-logo" alt="medium logo"/>
                    <p className="contact-name">Medium</p>
                </a>
                <a  className="contact-link" href="https://pinterest.com" target="blank">
                    <img src={pinterestLogo} className="contact-logo" alt="pinterest logo"/>
                    <p className="contact-name">Pinterest</p>
                </a>
                <a  className="contact-link" href="https://github.com" target="blank">
                    <img src={githubLogo} className="contact-logo" alt="github logo"/>
                    <p className="contact-name">Github</p>
                </a>
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