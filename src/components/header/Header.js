import React from 'react'
import './Header.css'

function Header() {

    return (
        <header>
            <div className="logo">
                <img src="img/devsa.jpg" alt=""/>                
            </div>
            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>            
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="index.html" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="index.html#services" className="nav__link">My Services</a></li>
                    <li className="nav__item"><a href="index.html#about" className="nav__link">About Me</a></li>
                    <li className="nav__item"><a href="index.html#work" className="nav__link">My Work</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
