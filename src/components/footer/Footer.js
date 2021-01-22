import React from 'react'
import './Footer.css'

function Footer() {

    return (
        <footer className="footer">
            <a href="mailto:huynh5851@gmail.com" className="footer__link">huynh5851@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://youtube.com">
                        <i className="fab fa-youtube"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://facebook.com">
                        <i className="fab fa-facebook"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com">
                        <i className="fab fa-twitter-square"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
